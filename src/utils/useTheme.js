import { ref, onMounted, watch } from 'vue';

// Create a global state for theme that can be shared across components
const enabled = ref(false);

export default function useTheme() {
  // Function to toggle theme
  const toggleTheme = () => {
    enabled.value = !enabled.value;
    
    // Update localStorage preference
    localStorage.setItem('darkMode', enabled.value);
    
    // Update document theme attribute
    document.documentElement.setAttribute('data-theme', enabled.value ? 'dark' : 'light');
    
    // Update meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', enabled.value ? '#14161E' : '#FAFAFA');
    }
  };

  // Function to set theme based on saved preference or system preference
  const setTheme = () => {
    // Check saved preference first
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme !== null) {
      enabled.value = savedTheme === 'true';
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      enabled.value = prefersDark;
    }
    
    // Set theme attribute on document
    document.documentElement.setAttribute('data-theme', enabled.value ? 'dark' : 'light');
    
    // Update meta theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', enabled.value ? '#14161E' : '#FAFAFA');
    }
  };

  // Watch for system theme changes
  onMounted(() => {
    setTheme();
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      // Only update if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        enabled.value = event.matches;
        document.documentElement.setAttribute('data-theme', enabled.value ? 'dark' : 'light');
      }
    });
  });

  return {
    enabled,
    toggleTheme,
    setTheme
  };
}
