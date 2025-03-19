# World of Unreal - Website Documentation

A modern, immersive mobile-first website for World of Unreal, featuring a game-inspired UI with interactive elements.

## Architecture Overview

This website is built using Vue 3 with a focus on delivering an app-like mobile experience:

- **Mobile-First Design**: Optimized for mobile with app-like interactions
- **Theme Support**: Light/dark mode with consistent theming variables
- **Game-Inspired UI**: Using animations, achievements, and interactive elements

## Technical Implementation

### Theme System

The site uses a centralized theme management system:

```javascript
// src/utils/useTheme.js
import { ref, onMounted } from 'vue';

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

  onMounted(() => {
    setTheme();
    // Add system theme change listener for automatic updates
  });

  return { enabled, toggleTheme, setTheme };
}
```

### Component Structure

The website focuses on mobile-optimized components:

#### Main Components
- MobileHeader.vue - Animated navigation menu with settings panel
- MobileFooter.vue - App-style navigation with animated tabs
- ServiceCard.vue - Interactive service cards with animations

#### Views
- MobileHome.vue - Main landing page with the journey experience
- MobileServices.vue - Services showcase with interactive elements
- Blog.vue - Blog/lab notes section

### Immersive SPA Experience

The World of Unreal website is designed as an immersive single-page application that guides users through a narrative journey:

- **Portal-like Navigation**: Animated transitions between sections create the feeling of warping into different spaces
- **Progressive Storytelling**: Content reveals sequentially through user interaction
- **Metaverse-Inspired UX**: Interface mimics the sense of exploring virtual worlds
- **Guided Experience**: Clear directional cues lead users through the journey

### Mobile Implementation

The mobile experience focuses on:

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

#### Navigation Experience
The app employs:
- Bottom tab navigation mimicking mobile games
- Animated transitions between sections with portal effects
- Progress indicators showing journey progress
- Touch-optimized interactive elements

### Image Placeholders
All placeholder images include AI prompt suggestions for generating appropriate visuals:

- Tech cards: `// A futuristic tech visualization of [tech.name] with neon blue glow effects`
- Mission backgrounds: `// A futuristic tech access portal with glowing edges`
- Achievement icons: `// A golden trophy with digital particles`
- Profile avatars: `// A futuristic digital avatar with glowing edges`

## Enhanced Icon System

The project uses a centralized, theme-aware icon system that allows for consistent styling and easy color management across the application.

### Icon System Features

- **Theme-Aware Icons**: Icons automatically adapt to light and dark themes
- **Customizable Colors**: Each icon can use specific color variables
- **Component-Based**: Implemented as Vue components for easy usage
- **CSS Variables**: Uses CSS variables for colors for easy global updates

### Themeable Icon Example

```javascript
// Define the icon paths/elements
const brainIconElements = [
  { d: 'M12 2L2 7L12 12L22 7L12 2Z' },
  { type: 'circle', cx: 12, cy: 12, r: 5 },
  { type: 'rect', x: 2, y: 7, width: 6, height: 10, rx: 1 }
];

// Add to ThemedIcons
BrainIcon: createSVGIcon(brainIconElements, { colorVar: '--ai-color' })
```

## Development Guidelines

### Adding New Pages

1. Create a new mobile-optimized view:
   - `views/MobileNewPage.vue`

2. Add to router.js:
   ```javascript
   { 
     path: '/new-page', 
     name: 'new-page',
     component: MobileNewPage
   }
   ```

### Component Best Practices

1. Keep components focused on a single responsibility
2. Use consistent naming and follow established CSS patterns for theming support
3. Make sure all components use the central theme system
4. Focus on touch-friendly interactions and mobile-optimized layout
5. Implement animations that enhance rather than distract from the user experience
