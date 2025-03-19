<template>
  <Page class="page" actionBarHidden="true">
    <ActionBar title="Services" />
    <GridLayout rows="auto, *" columns="*">
      <!-- Header Section -->
      <StackLayout row="0" class="header">
        <GridLayout rows="auto" columns="auto, *, auto">
          <Button col="0" class="back-button" text="←" @tap="goBack" />
          <Label col="1" class="header-title" text="Our Services" />
          <Button col="2" class="theme-toggle" @tap="toggleAppTheme" :text="enabled ? '☀️' : '🌙'" />
        </GridLayout>
      </StackLayout>
      
      <!-- Services List -->
      <ListView row="1" for="service in services" class="service-list">
        <v-template>
          <GridLayout rows="auto" columns="*" class="service-item">
            <StackLayout class="service-card">
              <Label :text="service.title" class="service-title" />
              <Label :text="service.description" textWrap="true" class="service-description" />
              <GridLayout rows="auto" columns="*, *" class="service-stats">
                <StackLayout col="0" class="stat-item">
                  <Label :text="service.projectCount.toString()" class="stat-value" />
                  <Label text="Projects" class="stat-label" />
                </StackLayout>
                <StackLayout col="1" class="stat-item">
                  <Label :text="service.rating + '/5'" class="stat-value" />
                  <Label text="Rating" class="stat-label" />
                </StackLayout>
              </GridLayout>
              <Button text="Request Service" class="service-button" @tap="requestService(service.id)" />
            </StackLayout>
          </GridLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
</template>

<script>
import { ref } from 'vue';
import useTheme from '../utils/useTheme';
import router from '../router';

export default {
  setup() {
    const { enabled, toggleTheme } = useTheme();
    
    // Toggle theme function
    const toggleAppTheme = () => {
      toggleTheme();
    };
    
    // Navigation functions
    const goBack = () => {
      router.navigateBack();
    };
    
    const requestService = (serviceId) => {
      console.log(`Service requested: ${serviceId}`);
      // Handle service request - this would typically show a form or navigate
      alert(`You've requested the ${services.value.find(s => s.id === serviceId).title} service`);
    };
    
    // Sample data for services
    const services = ref([
      {
        id: 'ar-development',
        title: 'AR Development',
        description: 'Create immersive augmented reality experiences that blend digital content with the real world.',
        projectCount: 48,
        rating: 4.8,
        color: '0, 204, 255'
      },
      {
        id: 'vr-worlds',
        title: 'VR Worlds',
        description: 'Build complete virtual reality environments with interactive elements and realistic physics.',
        projectCount: 35,
        rating: 4.9,
        color: '77, 58, 255'
      },
      {
        id: 'blockchain-solutions',
        title: 'Blockchain Solutions',
        description: 'Develop secure, transparent applications using cutting-edge blockchain technology.',
        projectCount: 63,
        rating: 4.7,
        color: '255, 138, 0'
      },
      {
        id: 'ai-integration',
        title: 'AI Integration',
        description: 'Enhance your applications with artificial intelligence and machine learning capabilities.',
        projectCount: 41,
        rating: 4.9,
        color: '214, 51, 255'
      },
      {
        id: 'metaverse-experiences',
        title: 'Metaverse Experiences',
        description: 'Create shared virtual spaces where users can interact with each other and digital objects.',
        projectCount: 27,
        rating: 4.8,
        color: '255, 102, 102'
      }
    ]);
    
    return {
      enabled,
      toggleAppTheme,
      goBack,
      services,
      requestService
    };
  }
};
</script>

<style scoped>
.page {
  background-color: #0A0C14;
}

.ns-light .page {
  background-color: #F0F3FF;
}

.header {
  padding: 16;
  background-color: #14161E;
  border-bottom-width: 1;
  border-bottom-color: rgba(0, 204, 255, 0.3);
}

.ns-light .header {
  background-color: #FFFFFF;
  border-bottom-color: rgba(0, 102, 204, 0.3);
}

.back-button {
  font-size: 18;
  width: 40;
  height: 40;
  background-color: transparent;
  color: #FFFFFF;
  border-width: 0;
}

.ns-light .back-button {
  color: #1E1E1E;
}

.header-title {
  font-size: 18;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
}

.ns-light .header-title {
  color: #1E1E1E;
}

.theme-toggle {
  font-size: 18;
  width: 40;
  height: 40;
  background-color: transparent;
  border-width: 0;
}

.service-list {
  separator-color: transparent;
  background-color: #0A0C14;
}

.ns-light .service-list {
  background-color: #F0F3FF;
}

.service-item {
  padding: 12;
}

.service-card {
  background-color: #14161E;
  border-radius: 16;
  border-width: 1;
  border-color: rgba(0, 204, 255, 0.3);
  padding: 16;
}

.ns-light .service-card {
  background-color: #FFFFFF;
  border-color: rgba(0, 102, 204, 0.3);
}

.service-title {
  color: #FFFFFF;
  font-size: 18;
  font-weight: bold;
  margin-bottom: 8;
}

.ns-light .service-title {
  color: #1E1E1E;
}

.service-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14;
  margin-bottom: 16;
}

.ns-light .service-description {
  color: rgba(30, 30, 30, 0.8);
}

.service-stats {
  margin-bottom: 16;
}

.stat-item {
  align-items: center;
}

.stat-value {
  color: #00CCFF;
  font-size: 18;
  font-weight: bold;
}

.ns-light .stat-value {
  color: #0066CC;
}

.stat-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12;
}

.ns-light .stat-label {
  color: rgba(30, 30, 30, 0.6);
}

.service-button {
  background-color: rgba(0, 204, 255, 0.1);
  border-radius: 8;
  height: 40;
  color: #00CCFF;
  font-size: 14;
  font-weight: bold;
}

.ns-light .service-button {
  background-color: rgba(0, 102, 204, 0.1);
  color: #0066CC;
}
</style> 