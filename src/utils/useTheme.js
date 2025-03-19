import { ref, onMounted, watch } from 'vue';

// Create a reactive reference to track if dark mode is enabled
const enabled = ref(false);

// Use a key to store the theme preference in localStorage
const STORAGE_KEY = 'world-of-unreal-theme-preference';

// Create a composable function that can be imported
export default function useTheme() {
  // Set up logic to update the data-theme attribute on the document
  const applyTheme = (isDark) => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  };

  // Watch for changes to the enabled state and apply the theme
  watch(enabled, (isDark) => {
    applyTheme(isDark);
    // Save the preference to localStorage
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  });

  // On component mount, check for existing preference
  onMounted(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    
    if (storedTheme) {
      enabled.value = storedTheme === 'dark';
    } else {
      // Check for prefers-color-scheme if no stored preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      enabled.value = prefersDark;
    }
    
    // Apply the theme
    applyTheme(enabled.value);
    
    // Watch for changes to system preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if no stored preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        enabled.value = e.matches;
      }
    });
  });

  return {
    enabled,
  };
}
