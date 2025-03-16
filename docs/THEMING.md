# World of Unreal Theming Guidelines

This document provides guidelines on how to implement consistent theming in the World of Unreal website.

## Color System

Our site uses a dynamic theming system that automatically adapts colors based on the user's preference (light or dark mode).

### Primary Colors

- **Dark Theme Primary**: `#00CCFF` (Bright cyan)
- **Light Theme Primary**: `#0066CC` (Deep blue)
- **Dark Theme Secondary**: `#4D3AFF` (Vibrant purple-blue)
- **Light Theme Secondary**: `#3A66FF` (Vivid blue)

### Background Colors

- **Dark Background**: `#0A0C14`
- **Dark Card Background**: `#14161E`
- **Light Background**: `#F0F3FF`
- **Light Card Background**: `#FFFFFF`

### Text Colors

- **Dark Theme Text**: `#FFFFFF`
- **Light Theme Text**: `#1E1E1E`
- **Dark Theme Muted Text**: `rgba(255, 255, 255, 0.7)`
- **Light Theme Muted Text**: `rgba(30, 30, 30, 0.7)`

## CSS Variables

All colors are accessible through CSS variables:

```css
/* Theme-specific primary colors */
--primary-dark: #00CCFF;
--primary-light: #0066CC;

/* Secondary accent color */
--secondary-dark: #4D3AFF;
--secondary-light: #3A66FF;

/* Shared variables */
--dark-bg: #0A0C14;
--dark-card: #14161E;
--light-bg: #F0F3FF;
--light-card: #FFFFFF;
--text-dark: #1E1E1E;
--text-light: #FFFFFF;
--text-muted-dark: rgba(30, 30, 30, 0.7);
--text-muted-light: rgba(255, 255, 255, 0.7);

/* Dynamic variables (auto switches based on theme) */
--primary-color: var(--primary-light); /* in light mode */
--primary-color: var(--primary-dark); /* in dark mode */
--secondary-color: var(--secondary-light); /* in light mode */
--secondary-color: var(--secondary-dark); /* in dark mode */
```

## Proper Theme Usage

### 1. Text Colors

**ALWAYS** use theme variables for text colors, never hardcode colors:

```css
/* CORRECT */
.my-element {
  color: var(--text-dark);
}

[data-theme="dark"] .my-element {
  color: var(--text-light);
}

/* INCORRECT */
.my-element {
  color: white; /* Never do this! */
}
```

### 2. Button Text Color Exception

For buttons with colored backgrounds, always use white text for better readability on all backgrounds:

```css
.button {
  background-color: var(--primary-color);
  color: #FFFFFF; /* This is the only acceptable hardcoded color */
}
```

### 3. Using Utility Classes

We provide utility classes for common styling needs:

```html
<!-- Theme-aware text color -->
<p class="text-theme">This text will be dark in light mode and light in dark mode</p>

<!-- Primary and secondary colors -->
<p class="text-primary">This uses the primary color</p>
<p class="text-secondary">This uses the secondary color</p>

<!-- Background colors -->
<div class="bg-theme">Theme-aware background</div>
<div class="bg-card">Card background</div>

<!-- Buttons -->
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

### 4. Theme-Aware Components

When creating new components, always use this pattern:

```css
.my-component {
  /* Default styles for light theme */
  color: var(--text-dark);
  background-color: var(--light-bg);
}

[data-theme="dark"] .my-component {
  /* Override for dark theme */
  color: var(--text-light);
  background-color: var(--dark-bg);
}
```

## Common Issues and Solutions

### White Text on White Background

If you see white text on a white background in light mode, you likely forgot to add theme-specific overrides:

```css
/* Problem */
.element {
  color: white; /* Always white, regardless of theme */
}

/* Solution */
.element {
  color: var(--text-dark);
}

[data-theme="dark"] .element {
  color: var(--text-light);
}
```

### Inconsistent Contrast

Always ensure sufficient contrast between text and background:

- Dark text on light backgrounds
- Light text on dark backgrounds
- For colored text, test in both light and dark modes

## Testing Theme Compatibility

Use our theme test page (`/theme-test.html`) to check how your styles look in both themes. Toggle between light and dark mode to ensure everything maintains proper contrast and readability.

## Theme Demo Component

We've created a dedicated Theme Demo component that showcases all theme utilities in action. This component is accessible at `/theme-demo` and demonstrates:

- Text color utilities
- Background color utilities
- Button styles
- Visual effects (glows, gradients)

Use this component as a reference when implementing new UI elements to ensure consistency with our theming system. It's also a great way to verify that your custom components adapt properly to both light and dark themes.

```html
<!-- Example of using theme utilities in your components -->
<div class="bg-card">
  <h3 class="text-theme">My Component Title</h3>
  <p class="text-muted">Supporting text with muted appearance</p>
  <button class="btn btn-primary">Action Button</button>
</div>
```

## Responsive Design Style Guide

A comprehensive style guide is available at `/style-guide` that demonstrates our responsive design patterns across different device sizes. This guide includes:

- Typography scales for mobile, tablet, and desktop
- Color system visualization
- Button styles and variations
- Layout patterns that adapt to different screen sizes
- Form elements and styling
- Responsive breakpoints and guidelines

When developing new components or pages, refer to this style guide to ensure consistent responsive behavior across all device sizes. The guide visually indicates which device size you're currently viewing, making it easy to test and verify responsive designs.

### Key Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px

Always use a mobile-first approach when implementing responsive designs. 