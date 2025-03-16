# Mobile-First Development Guide

## Overview

This document outlines the mobile-first approach implemented in the World of Unreal website. The site is designed to provide an optimal experience across all devices, with special attention to mobile users.

## Mobile Detection

The application uses two methods for mobile detection:

1. **Client-side detection in App.vue**:
   - Uses a reactive approach with `window.innerWidth` and user agent detection
   - Dynamically swaps components based on viewport size
   - Responds to window resize events

2. **Initial route loading in router.js**:
   - Detects mobile devices on initial page load
   - Dynamically imports the appropriate component version

## Mobile Components

The following mobile-specific components have been created:

- `MobileHeader.vue` - Optimized header with mobile navigation
- `MobileFooter.vue` - Condensed footer for mobile devices
- `MobileHome.vue` - Mobile-optimized home page
- `MobileServices.vue` - Mobile-friendly services page

## Responsive Utilities

The application includes several responsive utilities:

### CSS Classes

- **Display utilities**:
  - `.hide-mobile` / `.show-mobile`
  - `.hide-desktop` / `.show-desktop`

- **Container sizing**:
  - Mobile: `padding: 0 1rem`
  - Desktop: `max-width: 1200px; padding: 0 2rem`

- **Mobile-specific layout**:
  - `.text-center-mobile`
  - `.d-flex-mobile`
  - `.flex-column-mobile`

### Responsive Typography

Font sizes are adjusted based on viewport width:

- **Mobile** (max-width: 768px):
  - h1: 2rem
  - h2: 1.5rem
  - h3: 1.25rem
  - p: 0.9rem

- **Tablet** (769px - 1024px):
  - h1: 2.5rem
  - h2: 1.75rem
  - h3: 1.5rem

- **Desktop** (1025px+):
  - h1: 3rem
  - h2: 2rem
  - h3: 1.75rem

## Implementation Guidelines

### Creating Mobile Components

When creating a new page or component:

1. First, design for mobile screens
2. Create a mobile-specific version if needed
3. Implement responsive behavior for larger screens
4. Use the responsive utilities from `themeUtilities.css`

### Testing Mobile Views

Test mobile views using:

1. Browser developer tools (device emulation)
2. Actual mobile devices when possible
3. Verify both portrait and landscape orientations

### Performance Considerations

For mobile optimization:

1. Use lazy loading for images and components
2. Minimize JavaScript execution on mobile
3. Optimize asset sizes for faster loading
4. Consider reduced animations for better performance

## Best Practices

1. **Touch-friendly UI**:
   - Minimum touch target size of 44x44px
   - Adequate spacing between interactive elements
   - Avoid hover-dependent interactions

2. **Simplified Navigation**:
   - Use hamburger menu for mobile
   - Prioritize important navigation items
   - Implement breadcrumbs for deep navigation

3. **Content Prioritization**:
   - Show the most important content first
   - Consider what content can be hidden on mobile
   - Use progressive disclosure for complex information

4. **Form Design**:
   - Use appropriate input types (tel, email, etc.)
   - Stack form fields vertically
   - Ensure form elements are large enough to interact with

## Future Improvements

- Implement service worker for offline capabilities
- Add mobile-specific animations and transitions
- Create mobile versions for remaining pages
- Implement touch gestures for enhanced interaction 