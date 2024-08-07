import { ref, onMounted, watch } from 'vue';

const enabled = ref(false);

const setTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    enabled.value = true;
  } else {
    document.documentElement.removeAttribute('data-theme');
    enabled.value = false;
  }
};

export default function useTheme() {
  onMounted(() => {
    setTheme();
  });

  const toggleTheme = () => {
    enabled.value = !enabled.value;
    localStorage.setItem('theme', enabled.value ? 'dark' : 'light');
    setTheme();
  };

  watch(enabled, (newVal) => {
    localStorage.setItem('theme', newVal ? 'dark' : 'light');
    setTheme();
  });

  return {
    enabled,
    toggleTheme,
    setTheme,
  };
}
