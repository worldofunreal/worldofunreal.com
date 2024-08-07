<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <nav class="legal-navigation">
          <router-link v-for="item in legalNavigation" :key="item.id" :to="item.href" class="footerLegalBtn">
            {{ item.name }}
          </router-link>
        </nav>

        <div class="flex gap-4">
          <a href="https://twitter.com/worldofunreal" aria-label="Twitter" target="_blank" class="footerIcon">
            <img src="/assets/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://github.com/worldofunreal" aria-label="Github" target="_blank" class="footerIcon">
            <img src="/assets/github.svg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/company/worldofunreal/" aria-label="LinkedIn" target="_blank" class="footerIcon">
            <img src="/assets/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - World of Unreal. All rights reserved.
        <div>All trademarks referenced herein are the properties of their respective owners.</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const legalNavigation = [
  { id: 5, name: 'Terms and Conditions', href: '/terms' },
  { id: 6, name: 'Privacy Policy', href: '/privacy' },
];
const CURRENT_YEAR = new Date().getFullYear();
</script>

<style scoped>
.legal-navigation {
  font-size: 0.8em;
}

.footerLegalBtn {
  color: #8d8d8d;
}

.footerIcon img {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
