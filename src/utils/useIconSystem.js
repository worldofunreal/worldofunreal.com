import { h } from 'vue';
import { computed } from 'vue';
import useTheme from './useTheme';

// Use theme to get current theme state
const iconSystem = () => {
  const { enabled: isDarkMode } = useTheme();

  // Helper function to create SVG icon with theme awareness
  const createThemedIcon = (paths, viewBox = '0 0 24 24') => {
    return computed(() => {
      // Return a render function for the SVG
      return () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox,
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        class: 'themed-icon'
      }, paths.map(path => 
        h('path', {
          d: path,
          class: isDarkMode.value ? 'dark-theme' : 'light-theme'
        })
      ));
    });
  };

  // Tech page main icons
  const BrainIcon = createThemedIcon([
    'M9.5 2a5.5 5.5 0 0 1 3.642 9.63a6 6 0 0 1 8.59 5.37h-8.591a5.5 5.5 0 1 1-3.642-15Z',
    'M7.5 22h8.472a6 6 0 0 0-5.472-4a6 6 0 0 0-3 19Z'
  ]);

  const BlockchainIcon = createThemedIcon([
    'M21 12l-9 9l-9-9l9-9l9 9Z',
    'M12 3v18',
    'M3 12h18',
    'M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z'
  ]);

  const MetaverseIcon = createThemedIcon([
    'M3 12h18',
    'M9 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z',
    'M15 15a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z',
    'M21 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z',
    'M3 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z'
  ]);

  // AI page icons
  const MachineLearningIcon = createThemedIcon([
    'M12 2a4 4 0 0 1 4 4v4a4 4 0 1 1-8 0V6a4 4 0 0 1 4-4Z',
    'M4 18a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H4v-2Z' 
  ]);

  const NLPIcon = createThemedIcon([
    'M22 12h-4l-3 9L9 3l-3 9H2'
  ]);

  const ComputerVisionIcon = createThemedIcon([
    'M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0Z',
    'M12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z',
    'M2 12h3',
    'M19 12h3'
  ]);

  // Blockchain page icons
  const SmartContractIcon = createThemedIcon([
    'M8 12h8',
    'M8 15h5',
    'M14 3v4a1 1 0 0 0 1 1h4',
    'M5 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H5Z',
    'M19 8V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1'
  ]);

  const DeFiIcon = createThemedIcon([
    'M12 2v20',
    'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  ]);

  const NFTIcon = createThemedIcon([
    'M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z',
    'M3 10h18',
    'M10 3v18'
  ]);

  // Metaverse page icons
  const VRIcon = createThemedIcon([
    'M12 12h.01',
    'M8 11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3Z',
    'M6 14h12',
    'M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5Z',
  ]);

  const ARIcon = createThemedIcon([
    'M20 11h-5a2 2 0 0 1 0-4h.7a2 2 0 0 1 2 2',
    'M22 22l-2-2',
    'M8 22l2-2',
    'M3 3l18 18',
    'M10 6a2 2 0 0 1 2-2h5a2 2 0 0 1 0 4h-.7a2 2 0 0 1-2-2'
  ]);

  const AvatarIcon = createThemedIcon([
    'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
    'M12 3a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z'
  ]);

  return {
    // Tech main page icons
    BrainIcon,
    BlockchainIcon,
    MetaverseIcon,
    
    // AI page icons
    MachineLearningIcon,
    NLPIcon,
    ComputerVisionIcon,
    
    // Blockchain page icons
    SmartContractIcon,
    DeFiIcon,
    NFTIcon,
    
    // Metaverse page icons
    VRIcon,
    ARIcon,
    AvatarIcon
  };
};

export default iconSystem(); 