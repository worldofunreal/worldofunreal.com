# World of Unreal - Website Documentation

A modern, responsive website for World of Unreal, featuring dual rendering paths for mobile and desktop experiences.

## Architecture Overview

This website is built using Vue 3 with a unique approach to handling mobile and desktop experiences:

- **Dual Rendering Paths**: Different components are loaded based on device type
- **Theme Support**: Light/dark mode with consistent theming variables
- **Mobile-First Design**: Dedicated mobile experience with optimized UI elements

## Technical Implementation

### Device Detection & Routing

The site uses two layers of device detection:

1. **Initial Route Loading** (in router.js):
   ```javascript
   // Function to detect if user is on mobile
   const isMobile = () => {
     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
     const windowWidth = window.innerWidth;
     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || windowWidth < 768;
   };

   // Dynamic component loading based on device
   component: () => {
     return isMobile() ? import('./views/MobileHome.vue') : import('./views/Home.vue');
   }
   ```

2. **Reactive Detection** (in App.vue):
   ```javascript
   const isMobileView = ref(false);

   const checkIfMobile = () => {
     isMobileView.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
   };

   onMounted(() => {
     checkIfMobile();
     window.addEventListener('resize', checkIfMobile);
   });
   ```

### Component Structure

#### Desktop Views
Desktop views are standalone components that must explicitly import and use the Header component. Examples include:
- Home.vue
- Services.vue 

#### Mobile Views
Mobile views include their own header and footer components:
- MobileHome.vue 
- MobileServices.vue

Each mobile view should:
1. Import both MobileHeader and MobileFooter
2. Include theme toggle functionality
3. Pass the theme prop to both components

Example:
```vue
<template>
  <div class="mobile-view">
    <MobileHeader :theme="theme" @toggle-theme="toggleTheme" />
    <!-- Content -->
    <MobileFooter :theme="theme" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MobileHeader from '../components/MobileHeader.vue';
import MobileFooter from '../components/MobileFooter.vue';

const theme = ref('dark'); // Default theme

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};
</script>
```

### Theming System

The site uses CSS variables for theming, defined in App.vue:

```css
:root {
  /* Theme-specific primary colors */
  --primary-dark: #00CCFF; /* Brighter cyan for dark mode */
  --primary-light: #0066CC; /* Deeper blue for light mode */
  
  /* Secondary accent color */
  --secondary-dark: #4D3AFF; /* Vibrant purple-blue for dark mode */
  --secondary-light: #3A66FF; /* Vivid blue for light mode */
  
  /* Shared variables */
  --dark-bg: #0A0C14;
  --dark-card: #14161E;
  --light-bg: #F0F3FF;
  --light-card: #FFFFFF;
  /* ... more variables ... */
}

[data-theme="dark"] {
  --primary-color: var(--primary-dark);
  --secondary-color: var(--secondary-dark);
  /* ... more dark theme overrides ... */
}
```

To implement theming in components:
1. Use var(--variable-name) for colors and styles
2. For theme-specific styles, use the [data-theme="dark"] selector

#### Enhanced Theme Management

The theme system is managed through a centralized utility:

```javascript
// src/utils/useTheme.js
import { ref, onMounted, watch } from 'vue';

// Create a global state for theme that can be shared across components
const enabled = ref(false);

export default function useTheme() {
  // Toggle theme function
  const toggleTheme = () => {
    enabled.value = !enabled.value;
    localStorage.setItem('darkMode', enabled.value);
    document.documentElement.setAttribute('data-theme', enabled.value ? 'dark' : 'light');
  };
  
  // Initial theme setup based on preferences
  const setTheme = () => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      enabled.value = savedTheme === 'true';
    } else {
      enabled.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    document.documentElement.setAttribute('data-theme', enabled.value ? 'dark' : 'light');
  };

  // Watch for system theme changes
  onMounted(() => {
    setTheme();
    // Add system theme change listener for automatic updates
  });

  return { enabled, toggleTheme, setTheme };
}
```

This utility provides:
- A single source of truth for theme state across the application
- Persistence of theme preference in localStorage
- System preference detection with automatic updates
- Convenient theme toggle function for components

#### Tailwind CSS Integration

Tailwind is configured to work seamlessly with the CSS variable-based theme system:

```javascript
// tailwind.config.js
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Mapped theme colors
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'bg-light': 'var(--light-bg)',
        'bg-dark': 'var(--dark-bg)',
        'card-light': 'var(--light-card)',
        'card-dark': 'var(--dark-card)',
        // Additional color mappings...
      },
      boxShadow: {
        'primary-glow': '0 0 15px var(--primary-alpha)',
        'tech-glow': '0 0 15px var(--tech-glow)',
      },
      backgroundImage: {
        'tech-gradient': 'var(--tech-gradient)',
      },
      // Additional theme extensions...
    },
  },
  plugins: [
    // Custom plugin for theme-specific utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'var(--tech-gradient)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
```

This approach allows for:
- Using Tailwind utility classes with theme-aware colors
- Automatic dark/light mode switching based on `data-theme` attribute
- Custom utilities for specialized theme effects like text gradients
- Consistent design across components using either CSS variables directly or Tailwind classes

#### Using the Theme System in Components

For new components, you can use either approach:

1. **Traditional CSS Variables**:
```css
.my-element {
  color: var(--text-dark);
  background-color: var(--light-card);
}

[data-theme="dark"] .my-element {
  color: var(--text-light);
  background-color: var(--dark-card);
}
```

2. **Tailwind Utilities**:
```html
<div class="text-text-dark bg-card-light dark:text-text-light dark:bg-card-dark">
  <!-- content -->
</div>
```

For the best of both worlds, you can use Tailwind's `@apply` directive:
```css
.my-component {
  @apply bg-card-light dark:bg-card-dark text-text-dark dark:text-text-light;
  
  /* Custom styles that aren't easily done with Tailwind */
  box-shadow: 0 0 20px var(--tech-glow);
}
```

## Content Guidelines

### Brand Positioning

World of Unreal is positioned as a cutting-edge technology company specializing in:
- AI Solutions
- Blockchain Development
- Metaverse Experiences
- Web3 Applications

### Voice & Tone

- **Professional yet innovative**: Technical but accessible
- **Forward-thinking**: Focus on future possibilities
- **Technical but clear**: Avoid unnecessary jargon

### Content Structure

#### Home Page
- Hero section: Bold, attention-grabbing headline with clear value proposition
- Services overview: Highlight core technologies
- About section: Brief company introduction
- CTA section: Drive user engagement

#### Services Page
Each service should include:
- Descriptive heading
- Concise overview paragraph
- 4-5 key features/benefits
- Relevant visual representation
- Call-to-action

### Visual Guidelines

- Use futuristic, tech-oriented imagery
- Maintain consistent color scheme from the theme system
- Prefer abstract tech visualizations over generic stock photos

## Development Guidelines

### Adding New Pages

1. Create both mobile and desktop versions:
   - `views/NewPage.vue`
   - `views/MobileNewPage.vue`

2. Add to router.js with device detection:
   ```javascript
   { 
     path: '/new-page', 
     name: 'new-page',
     component: () => {
       return isMobile() ? import('./views/MobileNewPage.vue') : import('./views/NewPage.vue');
     }
   }
   ```

3. Ensure mobile version includes MobileHeader and MobileFooter

### Component Best Practices

1. Keep components focused on a single responsibility
2. Use consistent naming:
   - Mobile components: Mobile{Name}.vue
   - Reusable components: {Name}.vue (PascalCase)
3. Follow established CSS patterns for theming support

### Theme-Aware Component Development

When creating new components:

1. **Plan for both themes** - Always consider how your component will look in both light and dark modes.

2. **Choose the right approach**:
   - For simple styling: Use Tailwind utility classes with dark mode variants
   - For complex styling: Use CSS variables with media queries
   - For reusable styles: Consider creating a reusable class with `@apply`

3. **Testing theme transitions** - Always test that your component transitions smoothly between themes with no visual glitches.

4. **Performance considerations** - Using CSS variables for theming has minimal performance impact, but extensive use of complex CSS transitions during theme changes should be avoided.

## Marketing Enhancement Opportunities

### SEO Optimization
- Add meta descriptions to each page
- Implement structured data for rich snippets
- Use semantic HTML for improved accessibility

### Content Marketing
- Blog strategy focusing on tech trends
- Case studies highlighting successful projects
- Downloadable resources to capture leads

### Lead Generation
- Optimize contact forms for conversion
- Create targeted landing pages for specific services
- Implement analytics to track user engagement

## Maintenance Notes

When updating the site:
1. Always test both mobile and desktop views
2. Ensure theme toggle works consistently across all pages
3. Validate any new components against the design system

## Troubleshooting

Common issues:
- **Header not appearing**: Ensure Header/MobileHeader is imported and included in the template
- **Theme inconsistencies**: Check that theme prop is passed correctly to components
- **Mobile detection issues**: Verify both router.js and App.vue detection methods

## Future Enhancements

### Multi-Theme Support

The current architecture supports dark/light modes, but can be extended to support multiple themes:

1. **Theme Store Approach**:
   - Create a Pinia store to manage theme state
   - Define multiple theme presets beyond just dark/light
   - Add a theme selector component for user customization

2. **CSS Implementation**:
   - Extend CSS variables system with additional theme selectors
   - Structure as `[data-theme="theme-name"]` selectors
   - Create theme preset files for organization

3. **Migration Path**:
   - Current component styles can be gradually refactored
   - Existing dark/light implementations remain compatible
   - New components can be built with multi-theme support 

## Immersive SPA Experience

### Concept Overview

The World of Unreal website is designed as an immersive single-page application that guides users through a narrative journey:

- **Portal-like Navigation**: Animated transitions between sections create the feeling of warping into different spaces
- **Progressive Storytelling**: Content reveals sequentially through user interaction
- **Metaverse-Inspired UX**: Interface mimics the sense of exploring virtual worlds
- **Guided Experience**: Clear directional cues lead users through the journey

### Mobile Implementation

The mobile experience serves as the foundation, focusing on:

1. **Vertical Journey Flow**: Content sections transition vertically with portal/warp effects
2. **Touch-Optimized Interactions**: Large tap targets with haptic feedback
3. **Performance-First Animations**: Lightweight transitions using CSS and GSAP
4. **Progressive Loading**: Content loads as needed to maintain performance

### Animation System

The experience uses a combination of animation techniques:

```javascript
// Example transition using GSAP
function transitionToNextSection(currentSection, nextSection) {
  // Initial state
  gsap.set(nextSection, { 
    autoAlpha: 0,
    y: 100,
    scale: 0.8
  });
  
  // Timeline for coordinated animations
  const tl = gsap.timeline({
    onComplete: () => {
      // Update active section tracking
      activeSection.value = nextSection.id;
    }
  });
  
  // Exit animation for current section
  tl.to(currentSection, {
    duration: 0.5,
    autoAlpha: 0,
    y: -50,
    scale: 0.9,
    ease: "power2.in"
  });
  
  // "Portal" effect between sections
  tl.to(".portal-effect", {
    duration: 0.4,
    scale: 1.5,
    autoAlpha: 1,
    ease: "power2.out"
  });
  
  // Entrance animation for next section
  tl.to(nextSection, {
    duration: 0.6,
    autoAlpha: 1,
    y: 0,
    scale: 1,
    ease: "power2.out"
  });
  
  // Fade out portal effect
  tl.to(".portal-effect", {
    duration: 0.3,
    scale: 0,
    autoAlpha: 0,
    ease: "power2.in"
  }, "-=0.3");
}
```

### Content Sequencing

Content is organized into narrative "chapters" that reveal a cohesive story:

1. **Entry Portal**: Initial hook and brand introduction
2. **Technology Showcase**: Interactive demonstrations of core technologies
3. **Service Exploration**: Detailed service capabilities with animated transitions
4. **Vision & Mission**: Company purpose and future outlook
5. **Connection Point**: Call-to-action and contact opportunities

### Implementation Plan

The immersive experience will be built in phases:

1. **Foundation**: Create core mobile layout and navigation structure
2. **Animation Framework**: Implement transition system with GSAP
3. **Content Modules**: Develop individual narrative sections
4. **Interaction Layer**: Add touch gestures and interactive elements
5. **Performance Optimization**: Ensure smooth experience on all devices

### Design Guidelines

To maintain the immersive feel:

- **Continuous Motion**: Subtle animations keep the experience feeling alive
- **Depth Cues**: Use shadows, scale, and parallax to create spatial feeling
- **Consistent Transitions**: Standardize how elements enter, exit, and transform
- **Reduced Cognitive Load**: Present one key concept per section
- **Visual Breathing Room**: Use negative space to frame important elements 

## Game-Inspired UI Implementation

The application features a game-like UI inspired by modern metaverse and VR applications, with elements mimicking achievements, progression tracking, and user profiles typically found in gaming platforms.

### Design Inspiration

The UI design draws from:
- Modern VR/AR application interfaces with neon highlights
- Gaming achievement and progression systems
- Cyberpunk aesthetics with glowing elements
- Mobile gaming dashboards with stats and metrics

### Key UI Components

#### Card Components
Cards feature:
- Neon-highlighted borders that glow on interaction
- Gradient overlays for images with consistent aesthetic
- Stats counters showing usage metrics
- Hover effects that create a sense of depth

```css
.tech-card {
  position: relative;
  background: rgba(10, 12, 30, 0.6);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(var(--tech-color, 0, 204, 255), 0.2);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.tech-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 25px rgba(var(--tech-color, 0, 204, 255), 0.25);
  border: 1px solid rgba(var(--tech-color, 0, 204, 255), 0.5);
}
```

#### Achievement System
The application features:
- Progress bars showing completion statistics
- Achievement badges with unlock states
- XP tracking system with level indicators
- Mission cards with completion tracking

```css
.mission-card.completed {
  border: 1px solid rgba(0, 255, 128, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 128, 0.15);
}

.achievement-item.unlocked .achievement-icon {
  box-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
  border: 1px solid rgba(255, 204, 0, 0.5);
}
```

#### Navigation Experience
The app employs:
- Bottom tab navigation mimicking mobile games
- Animated transitions between sections with portal effects
- Progress indicators showing journey progress
- Touch-optimized interactive elements

#### Immersive Effects
Visual effects include:
- Glowing borders that pulse and respond to interaction
- Backdrop filters creating glass-like surfaces
- Gradient overlays for depth and visual interest
- Subtle animations that create a sense of liveliness

### Image Placeholders
All placeholder images include AI prompt suggestions for generating appropriate visuals:

- Tech cards: `// A futuristic tech visualization of [tech.name] with neon blue glow effects`
- Mission backgrounds: `// A futuristic tech access portal with glowing edges`
- Achievement icons: `// A golden trophy with digital particles`
- Profile avatars: `// A futuristic digital avatar with glowing edges`

### Mobile-First Approach
The design is optimized for mobile first, with:
- Touch-friendly tap targets
- Grid layouts that adapt from 1-column to multi-column
- Space efficiency for small screens
- Bottom navigation for easy thumb access 

## Enhanced Icon System

The project uses a centralized, theme-aware icon system that allows for consistent styling and easy color management across the application.

### Icon System Features

- **Theme-Aware Icons**: Icons automatically adapt to light and dark themes
- **Customizable Colors**: Each icon can use specific color variables
- **Component-Based**: Implemented as Vue components for easy usage
- **CSS Variables**: Uses CSS variables for colors for easy global updates
- **Active States**: Built-in support for active, hover states
- **Runtime Compilation Compatible**: Uses render functions instead of templates to avoid Vue runtime compilation errors

### Using The Icon System

Import icons from the central system:

```javascript
import ThemedIcons from '../utils/useIconSystem';

// In your component setup
const myIcon = ThemedIcons.BrainIcon;

// Or directly in your template
<component :is="ThemedIcons.HomeIcon" />
```

Each icon accepts props:

```javascript
<component :is="ThemedIcons.HomeIcon" 
  size="32px"
  color="#FF0000"  
  :active="isActive" 
/>
```

### Customizing Per-Technology Colors

Technology-specific icons use dedicated CSS variables:

```css
:root {
  /* Technology-specific colors */
  --ai-color: #00CCFF;
  --blockchain-color: #9933FF;
  --metaverse-color: #FF3366;
  --web3-color: #33FFCC;
}
```

These variables automatically adapt to light and dark themes, providing consistent branding while respecting user theme preferences.

### Adding New Icons

To add a new icon:

1. Define the SVG elements as JavaScript objects with appropriate attributes
2. Add to the ThemedIcons collection in `src/utils/useIconSystem.js`:

```javascript
// Define the icon paths/elements
const newIconElements = [
  { d: 'M12 2L2 7L12 12L22 7L12 2Z' },
  { type: 'circle', cx: 12, cy: 12, r: 5 },
  { type: 'rect', x: 2, y: 7, width: 6, height: 10, rx: 1 }
];

// Add to ThemedIcons
NewIcon: createSVGIcon(newIconElements, { colorVar: '--custom-color' })
```

### Implementation Notes

The icon system uses Vue's render functions rather than string templates to avoid runtime compilation errors. This approach:

1. Creates SVG elements using Vue's h() function directly
2. Supports path, circle, and rect SVG elements
3. Works with Vue's build without requiring runtime compilation
4. Avoids the error: "Component provided template option but runtime compilation is not supported"

### Benefits

This system provides:
- Consistent styling across the application
- Easy theme switching support
- Simplified color management 
- Component-based approach for Vue integration
- Compatible with Vue's runtime-only build
