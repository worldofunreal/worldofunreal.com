<template>
  <nav id="nav-bar" :class="[navBgTextColor, { 'dark-theme': enabled, 'light-theme': !enabled }]" class="navPadding" style="height: 48px">
    <div class="lg:w-1/12">
      <Transition appear name="fadeIn">
        <router-link v-if="!loading" to="/" class="home-button" aria-label="Website Logo">
          <img :src="currentLogo" width="64" height="64" alt="favicon" loading="lazy" />
        </router-link>
      </Transition>
    </div>

    <div class="nav-container flex items-center justify-end gap-4">
      <div v-if="!loading" class="flex items-center gap-4">
        <a href="https://twitter.com/worldofunreal" aria-label="Twitter" target="_blank" class="footerIcon">
          <img src="/assets/twitter.svg" alt="Twitter" class="w-5 h-5"/>
        </a>
        <a href="https://github.com/worldofunreal" aria-label="Github" target="_blank" class="footerIcon">
          <img src="/assets/github.svg" alt="Github" class="w-5 h-5"/>
        </a>
        <a href="https://www.linkedin.com/company/worldofunreal/" aria-label="LinkedIn" target="_blank" class="footerIcon">
          <img src="/assets/linkedin.svg" alt="LinkedIn" class="w-5 h-5"/>
        </a>
        <button type="button" aria-label="theme toggle" @click="toggleTheme()">
          <Transition name="fade" mode="out-in">
            <SunIcon v-if="enabled" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5">Dark mode</MoonIcon>
          </Transition>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue';
import { useRoute } from 'vue-router';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { gsap } from 'gsap';
import useTheme from '../utils/useTheme';
import useScrollToTop from '../utils/useScrollToTop';
import useTrackNavBar from '../utils/useTrackNavBar';
import { useTransitionTracking } from '../utils/useTransitionTracking';
import blackWhiteFavicon from '../assets/favicon-bw.png';
import whiteBlackFavicon from '../assets/favicon-wb.png';

const route = useRoute();
const { enabled, toggleTheme, setTheme } = useTheme();
const { scrollTop } = useScrollToTop();
const { trackNavBarPosition, currentOffsetHeight } = useTrackNavBar();
const { trackTransitionCompleted, transitionCompletedOnce } = useTransitionTracking();

let loading = ref(transitionCompletedOnce.value ? false : true);
const screenHeight = ref(0);
const heightOfNav = ref(0);
const currentScreenWidth = ref(0);
const navBgTextColor = ref('bg-black text-white');

const currentLogo = computed(() => {
  return enabled.value ? whiteBlackFavicon : blackWhiteFavicon;
});

const trackScroll = () => {
  trackNavBarPosition('nav-bar');
};

watchEffect(() => {
  if (route.path === '/') {
    navBgTextColor.value = 'bg-black text-white';
  } else {
    navBgTextColor.value = 'bg-white text-black dark:bg-[#121212]';
  }
  if (enabled.value) {
    navBgTextColor.value = 'bg-black text-white';
  } else {
    navBgTextColor.value = 'bg-white text-black dark:bg-[#121212]';
  }
});

onMounted(() => {
  setTheme();
  trackScroll();
  window.addEventListener('scroll', trackScroll);
  const navigationBar = document.getElementById('nav-bar');
  screenHeight.value = window.innerHeight;
  heightOfNav.value = navigationBar ? navigationBar.offsetHeight : 0;
  currentScreenWidth.value = window.innerWidth;
  loading.value = false;
  trackTransitionCompleted();
});
</script>

<style lang="scss" scoped>
@import '../index.scss';

.footerIcon img {
  width: 1.25rem;
  height: 1.25rem;
}

.dark-theme {
  background-color: #121212;
  color: white;
}

.light-theme {
  background-color: white;
  color: black;
}
</style>
