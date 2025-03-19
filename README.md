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