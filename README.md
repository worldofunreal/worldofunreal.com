# World of Unreal

A modern, responsive website showcasing metaverse, AI, blockchain, and Web3 technologies.

## Features

- Responsive, mobile-first design
- Dark/light theme support
- Vue.js frontend
- Modern UI with luxury brand aesthetic
- Optimized for all devices

## Mobile-First Approach

This project implements a comprehensive mobile-first design strategy:

- Dedicated mobile components for optimal user experience
- Responsive utilities for consistent styling across devices
- Dynamic component loading based on device detection
- Touch-friendly UI elements for mobile users

For detailed information about our mobile implementation, see [Mobile Development Guide](docs/MOBILE.md).

## Theme System

The website features a sophisticated theming system that adapts colors based on user preferences:

- Dynamic color variables for consistent styling
- Automatic text color handling for optimal readability
- Utility classes for quick styling
- Theme testing page at `/theme-test.html`

For detailed theming guidelines, see [Theming Guide](docs/THEMING.md).

## Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Project Structure

```
worldofunreal.com/
├── public/            # Static assets
│   ├── assets/        # Images and media files
│   └── theme-test.html # Theme testing page
├── src/
│   ├── components/    # Vue components
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── MobileHeader.vue
│   │   └── MobileFooter.vue
│   ├── views/         # Page components
│   │   ├── Home.vue
│   │   ├── MobileHome.vue
│   │   ├── Services.vue
│   │   └── MobileServices.vue
│   ├── utils/         # Utility functions
│   │   ├── useTheme.js
│   │   └── themeUtilities.css
│   ├── App.vue        # Main app component
│   └── router.js      # Vue Router configuration
└── docs/              # Documentation
    ├── THEMING.md
    └── MOBILE.md
```

## Design Guidelines

- **Typography**: Orbitron for headings, Montserrat for body text
- **Colors**: Follow the theming guidelines in `docs/THEMING.md`
- **Components**: Maintain consistency across similar components

## License

Copyright © 2023 World of Unreal. All rights reserved. 