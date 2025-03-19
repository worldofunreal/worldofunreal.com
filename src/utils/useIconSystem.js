import { computed, h } from 'vue';

// Create a render function for SVG icons
export const createSVGIcon = (elements, options = {}) => {
  // Default options
  const defaultOptions = {
    colorVar: '--icon-color',
    size: '24px',
    viewBox: '0 0 24 24'
  };
  
  // Merge with provided options
  const mergedOptions = { ...defaultOptions, ...options };
  
  // Return a component definition
  return {
    props: {
      color: String,
      size: String,
      active: Boolean
    },
    
    setup(props) {
      // Compute styles
      const iconStyles = computed(() => {
        return {
          width: props.size || mergedOptions.size,
          height: props.size || mergedOptions.size,
          color: props.color || `var(${mergedOptions.colorVar})`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        };
      });
      
      return { iconStyles, elements, mergedOptions };
    },
    
    render() {
      // Create SVG children
      const children = this.elements.map(el => {
        if (el.type === 'circle') {
          return h('circle', {
            cx: el.cx || 12,
            cy: el.cy || 12,
            r: el.r || 10,
            stroke: 'currentColor',
            'stroke-width': el.width || 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            fill: el.fill || 'none'
          });
        } else if (el.type === 'rect') {
          return h('rect', {
            x: el.x || 0,
            y: el.y || 0,
            width: el.width || 10,
            height: el.height || 10,
            rx: el.rx || 0,
            stroke: 'currentColor',
            'stroke-width': el.strokeWidth || 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            fill: el.fill || 'none'
          });
        } else {
          // Default to path
          return h('path', {
            d: el.d,
            stroke: 'currentColor',
            'stroke-width': el.width || 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            fill: el.fill || 'none'
          });
        }
      });
      
      // Create SVG element with paths
      return h('div', {
        class: {
          'themed-icon': true,
          'active': this.active
        },
        style: this.iconStyles
      }, [
        h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: this.mergedOptions.viewBox,
          fill: 'none',
          width: '100%', 
          height: '100%'
        }, children)
      ]);
    }
  };
};

// Define icon paths
const homeIconPaths = [
  { d: 'M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z' },
  { d: 'M9 22V12H15V22' }
];

const exploreIconPaths = [
  { type: 'circle', cx: 12, cy: 12, r: 10 },
  { d: 'M8.5 15.5L15.5 8.5' },
  { d: 'M8.5 8.5H15.5V15.5' }
];

const servicesIconPaths = [
  { d: 'M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z' },
  { d: 'M3.27 6.96L12 12.01L20.73 6.96' },
  { d: 'M12 22.08V12' }
];

const aboutIconPaths = [
  { d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' },
  { d: 'M12 16V12' },
  { d: 'M12 8H12.01' }
];

const sunIconPaths = [
  { d: 'M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z' },
  { d: 'M12 1V3' },
  { d: 'M12 21V23' },
  { d: 'M4.22 4.22L5.64 5.64' },
  { d: 'M18.36 18.36L19.78 19.78' },
  { d: 'M1 12H3' },
  { d: 'M21 12H23' },
  { d: 'M4.22 19.78L5.64 18.36' },
  { d: 'M18.36 5.64L19.78 4.22' }
];

const moonIconPaths = [
  { d: 'M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41102 20.3741 6.88299 19.5345 5.67423 18.3258C4.46546 17.117 3.62594 15.589 3.25391 13.9205C2.88188 12.252 2.99272 10.5121 3.57346 8.9043C4.1542 7.29651 5.18078 5.88737 6.53321 4.84175C7.88564 3.79614 9.5078 3.15731 11.21 3C10.2134 4.34827 9.73385 6.00945 9.85853 7.68141C9.98322 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6517 13.7866 21 12.79Z' }
];

const brainIconPaths = [
  { d: 'M12 2C7.58 2 4 5.58 4 10C4 12.03 4.76 13.87 6 15.28V20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20V15.28C19.24 13.87 20 12.03 20 10C20 5.58 16.42 2 12 2Z' },
  { d: 'M12 16V14' },
  { d: 'M9 14V12' },
  { d: 'M15 14V12' },
  { d: 'M9 9V9.01' },
  { d: 'M15 9V9.01' }
];

const blockchainIconPaths = [
  { type: 'rect', x: 2, y: 7, width: 6, height: 10, rx: 1 },
  { type: 'rect', x: 9, y: 3, width: 6, height: 18, rx: 1 },
  { type: 'rect', x: 16, y: 7, width: 6, height: 10, rx: 1 }
];

const metaverseIconPaths = [
  { d: 'M4 12C4 9.79 7.13 8 11 8C14.87 8 18 9.79 18 12C18 14.21 14.87 16 11 16C7.13 16 4 14.21 4 12Z' },
  { d: 'M4 6V18' },
  { d: 'M18 6V18' },
  { d: 'M11 16V22' },
  { d: 'M11 8V2' }
];

const web3IconPaths = [
  { d: 'M12 2L2 7L12 12L22 7L12 2Z' },
  { d: 'M2 17L12 22L22 17' },
  { d: 'M2 12L12 17L22 12' }
];

const contactIconPaths = [
  { d: 'M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z' }
];

// Export a collection of themed icons
const ThemedIcons = {
  // Navigation Icons
  HomeIcon: createSVGIcon(homeIconPaths, { size: '32px' }),
  ExploreIcon: createSVGIcon(exploreIconPaths, { size: '32px' }),
  ServicesIcon: createSVGIcon(servicesIconPaths, { size: '32px' }),
  AboutIcon: createSVGIcon(aboutIconPaths, { size: '32px' }),
  ContactIcon: createSVGIcon(contactIconPaths, { size: '32px' }),
  
  // Theme Icons
  SunIcon: createSVGIcon(sunIconPaths, { size: '24px' }),
  MoonIcon: createSVGIcon(moonIconPaths, { size: '24px' }),
  
  // Technology Icons
  BrainIcon: createSVGIcon(brainIconPaths, { size: '64px', colorVar: '--ai-color' }),
  BlockchainIcon: createSVGIcon(blockchainIconPaths, { size: '64px', colorVar: '--blockchain-color' }),
  MetaverseIcon: createSVGIcon(metaverseIconPaths, { size: '64px', colorVar: '--metaverse-color' }),
  Web3Icon: createSVGIcon(web3IconPaths, { size: '64px', colorVar: '--web3-color' }),
};

export default ThemedIcons; 