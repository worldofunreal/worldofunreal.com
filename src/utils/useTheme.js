import { ref } from 'vue';
import { ApplicationSettings, Application } from '@nativescript/core';

// Create a global state for theme
const enabled = ref(false);

export default function useTheme() {
  // Toggle theme function
  const toggleTheme = () => {
    enabled.value = !enabled.value;
    // Save theme setting in NativeScript ApplicationSettings
    ApplicationSettings.setBoolean('darkMode', enabled.value);
    applyThemeToApp();
  };
  
  // Apply the theme to app
  const applyThemeToApp = () => {
    const rootView = Application.getRootView();
    if (rootView) {
      rootView.className = enabled.value ? 'ns-dark' : 'ns-light';
    }
  };

  // Initial theme setup based on preferences
  const setTheme = () => {
    const savedTheme = ApplicationSettings.getBoolean('darkMode', null);
    
    if (savedTheme !== null) {
      enabled.value = savedTheme;
    } else {
      // Default to system preference if available
      try {
        const isDarkMode = Application.systemAppearance() === 'dark';
        enabled.value = isDarkMode;
      } catch (e) {
        enabled.value = false; // Default to light if can't detect
      }
    }
    
    applyThemeToApp();
  };

  return { 
    enabled, 
    toggleTheme, 
    setTheme 
  };
}
