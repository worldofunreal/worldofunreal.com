<template>
  <Frame>
    <Page :class="theme">
      <ActionBar title="World of Unreal" />
      <ScrollView>
        <StackLayout class="main-content">
          <NavigationButton text="Menu" @tap="onDrawerButtonTap" />
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </StackLayout>
      </ScrollView>
    </Page>
  </Frame>
</template>

<script>
import { computed } from 'vue';

export default {
  data() {
    return {
      themeEnabled: false
    };
  },
  computed: {
    theme() {
      return this.themeEnabled ? 'theme-dark' : 'theme-light';
    }
  },
  methods: {
    onDrawerButtonTap() {
      // Toggle theme for now, we'll add proper navigation later
      this.themeEnabled = !this.themeEnabled;
    }
  }
};
</script>

<style lang="scss">
// Theme variables
.theme-light {
  --primary-color: #0066CC;
  --secondary-color: #3A66FF;
  --background-color: #F0F3FF;
  --card-color: #FFFFFF;
  --text-color: #1E1E1E;
  --text-muted: rgba(30, 30, 30, 0.7);
}

.theme-dark {
  --primary-color: #00CCFF;
  --secondary-color: #4D3AFF;
  --background-color: #0A0C14;
  --card-color: #14161E;
  --text-color: #FFFFFF;
  --text-muted: rgba(255, 255, 255, 0.7);
}

// Global styles
Page {
  background-color: var(--background-color);
  color: var(--text-color);
}

.main-content {
  padding: 16;
}

Label {
  color: var(--text-color);
  font-family: "Montserrat";
  margin: 8 0;
}

.h1 {
  font-size: 24;
  font-weight: bold;
  font-family: "Orbitron";
  margin: 16 0;
}

.h2 {
  font-size: 20;
  font-weight: bold;
  font-family: "Orbitron";
  margin: 12 0;
}

.card {
  background-color: var(--card-color);
  border-radius: 8;
  padding: 16;
  margin: 8 0;
}
</style> 