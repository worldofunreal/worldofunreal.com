<template>
  <div>
    <!-- Hero Section -->
    <div class="hero min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="logo-container">
          <img src="/assets/logo.svg" alt="World of Unreal Logo" class="mx-auto hero-logo" />
        </div>
        <h2 class="mt-4 text-lg text-white subtitle">Into the Metaverse</h2>
        <button class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 learn-more">
          Learn More
        </button>
      </div>
    </div>

    <!-- Scrolling Text Section -->
    <div class="section-01 scrolling min-h-screen flex items-center justify-center -mb-16">
      <h2 class="main-elem">World of Unreal</h2>
      <h2 class="msg-elem msg-elem-01">Welcome to the Metaverse</h2>
      <h2 class="msg-elem msg-elem-02">Innovative Technology</h2>
      <h2 class="msg-elem msg-elem-03">Immersive Experiences</h2>
      <h2 class="msg-elem msg-elem-04">Join Our Journey</h2>
    </div>

    <!-- Projects Section -->
    <section :class="[sectionBgClass, 'projects-overview py-8 -mt-16']">
      <h2 :class="['text-3xl font-bold text-center', sectionTextClass]">Our Projects</h2>
      <div class="flex flex-wrap justify-center mt-8">
        <ProjectCard 
          title="Cosmicrafts" 
          description="Cosmicrafts is a real-time strategy game set in the Dark Rift galaxy, where players choose unique factions and engage in strategic combat with deep lore. It offers immersive gameplay and a rich narrative, built for competitive esports."
          image="/assets/cosmicrafts.jpg"
          link="https://cosmicrafts.com/"
        />
        <ProjectCard 
          title="IC Hub" 
          description="A hub for decentralized applications on the Internet Computer, add friends and join groups, public and private chats, integrate your own project, discover the best of the Ecosystem and much more."
          image="/assets/ichub.jpg"
          link="https://md7ke-jyaaa-aaaak-qbrya-cai.ic0.app/"
        />
      </div>
    </section>
  </div>
</template>


<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, computed } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import useTheme from '../utils/useTheme';

const { enabled } = useTheme();

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const section1 = document.querySelector('.section-01');
  const mainText = section1.querySelector('.main-elem');
  const msgText1 = section1.querySelector('.msg-elem-01');
  const msgText2 = section1.querySelector('.msg-elem-02');
  const msgText3 = section1.querySelector('.msg-elem-03');
  const msgText4 = section1.querySelector('.msg-elem-04');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section1,
      pin: true,
      scrub: 1,
      start: 'top top',
      end: '+=3000',
    },
  });

  tl.to(mainText, { y: '-100%', duration: 1 })
    .to(msgText1, { y: '-50%', opacity: 1, duration: 1 }, '-=0.5')
    .to(msgText1, { y: '-100%', opacity: 0, duration: 1 }, '+=1')
    .to(msgText2, { y: '-50%', opacity: 1, duration: 1 }, '-=0.5')
    .to(msgText2, { y: '-100%', opacity: 0, duration: 1 }, '+=1')
    .to(msgText3, { y: '-50%', opacity: 1, duration: 1 }, '-=0.5')
    .to(msgText3, { y: '-100%', opacity: 0, duration: 1 }, '+=1')
    .to(msgText4, { y: '-50%', opacity: 1, duration: 1 }, '-=0.5')
    .to(msgText4, { y: '-100%', opacity: 0, duration: 1 }, '+=1');
});

const sectionBgClass = computed(() => (enabled.value ? 'dark-bg' : 'light-bg'));
const sectionTextClass = computed(() => (enabled.value ? 'text-white' : 'text-black'));
</script>


<style scoped>
.hero {
  text-align: center;
  margin-bottom: -800px; /* Adjust this value as needed */
}

.main-elem {
  font-size: calc(6vw + 12px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 5;
}

.msg-elem {
  font-size: calc(2vw + 12px);
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 5;
}

button:hover {
  transform: scale(1.025);
}

.projects-overview {
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: -450px; /* Adjust this value as needed */
  padding-top: 100px; /* Adjust this value as needed */
}

</style>
