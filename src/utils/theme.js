import { ref, onMounted } from 'vue';

export const useTheme = () => {
  const theme = ref(localStorage.getItem('theme') || 'dark');
  
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme.value);
    document.documentElement.setAttribute('data-theme', theme.value);
  };

  const setTheme = (newTheme) => {
    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  onMounted(() => {
    // Set initial theme
    setTheme(theme.value);
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  });
  
  return { theme, toggleTheme, setTheme };
}; 