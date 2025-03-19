<template>
  <div class="theme-example">
    <div class="theme-example__header">
      <h2 class="theme-example__title">Theme Example</h2>
      <p class="theme-example__subtitle">A demonstration of proper transitions and animations</p>
    </div>

    <div class="theme-example__content">
      <div class="theme-example__section" v-for="(section, index) in sections" :key="index">
        <h3 class="theme-example__section-title">{{ section.title }}</h3>
        <p class="theme-example__section-text">{{ section.text }}</p>
      </div>
    </div>

    <div class="theme-example__footer">
      <button class="theme-example__button" @click="handleClick">
        Animate Content
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ThemeExample',
  setup() {
    const sections = ref([
      {
        title: 'Section 1',
        text: 'This is the first section with some example content.'
      },
      {
        title: 'Section 2',
        text: 'Here is another section with different content.'
      },
      {
        title: 'Section 3',
        text: 'And finally, a third section to demonstrate animations.'
      }
    ]);

    const handleClick = () => {
      gsap.to('.theme-example__section', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power2.out'
      });
    };

    onMounted(() => {
      // Initial animation
      gsap.from('.theme-example__header', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Animate sections on scroll
      sections.value.forEach((_, index) => {
        gsap.from(`.theme-example__section:nth-child(${index + 1})`, {
          scrollTrigger: {
            trigger: `.theme-example__section:nth-child(${index + 1})`,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    });

    onBeforeUnmount(() => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    });

    return {
      sections,
      handleClick
    };
  }
};
</script>

<style lang="scss" scoped>
.theme-example {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  &__header {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  &__subtitle {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
  }

  &__content {
    margin-bottom: 3rem;
  }

  &__section {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--color-background-secondary);
    border-radius: 8px;
    transform: translateY(20px);
    opacity: 0;
  }

  &__section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  &__section-text {
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  &__footer {
    text-align: center;
  }

  &__button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    background: var(--color-primary);
    color: var(--color-text-inverse);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
}
</style> 