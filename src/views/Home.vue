<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="*" columns="*">
      <!-- Main Content Container -->
      <StackLayout v-if="activeSection === 'entry-portal'" class="journey-container">
        <Label class="title-gradient" text="WORLD OF UNREAL" />
        <StackLayout class="subtitle-container">
          <Label class="journey-subtitle" text="ENTER THE METAVERSE" />
          <StackLayout class="tech-line" />
        </StackLayout>
        <Button @tap="navigateTo('tech-showcase')" class="journey-button">
          <FormattedString>
            <Span text="BEGIN JOURNEY" class="button-text" />
          </FormattedString>
        </Button>
      </StackLayout>

      <!-- Technology Showcase Section -->
      <ScrollView v-if="activeSection === 'tech-showcase'" orientation="vertical">
        <StackLayout class="container">
          <Label class="section-title" text="Our Technologies" />
          
          <GridLayout rows="auto, auto" columns="*, *" class="tech-grid">
            <StackLayout
              v-for="(tech, index) in technologies"
              :key="tech.id"
              class="tech-card"
              :row="Math.floor(index / 2)"
              :col="index % 2"
              @tap="showTechDetails(tech.id)"
            >
              <!-- Card Image -->
              <Image stretch="aspectFill" src="~/assets/placeholder.jpg" class="card-image" />
              <StackLayout class="card-content">
                <Label :text="tech.name" class="tech-name" />
                <StackLayout class="tech-users">
                  <Label :text="tech.userCount + 'k'" class="user-count" />
                  <Label text="active users" class="user-label" />
                </StackLayout>
              </StackLayout>
            </StackLayout>
          </GridLayout>
          
          <Button @tap="goToServices" class="journey-button secondary">
            <FormattedString>
              <Span text="CONTINUE" class="button-text" />
            </FormattedString>
          </Button>
        </StackLayout>
      </ScrollView>
      
      <!-- Services Exploration Section -->
      <ScrollView v-if="activeSection === 'services-explore'" orientation="vertical">
        <StackLayout class="container">
          <Label class="section-title" text="Our Services" />
          
          <StackLayout class="service-cards">
            <StackLayout
              v-for="(service, index) in services"
              :key="service.id"
              class="service-card"
            >
              <StackLayout class="service-header">
                <Label :text="service.title" class="service-title" />
              </StackLayout>
              <Label :text="service.description" class="service-description" textWrap="true" />
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
              <Button text="Learn More" class="service-button" />
            </StackLayout>
          </StackLayout>
          
          <Button @tap="navigateTo('vision-mission')" class="journey-button secondary">
            <FormattedString>
              <Span text="DISCOVER MORE" class="button-text" />
            </FormattedString>
          </Button>
        </StackLayout>
      </ScrollView>
      
      <!-- Vision & Mission Section -->
      <ScrollView v-if="activeSection === 'vision-mission'" orientation="vertical">
        <StackLayout class="container">
          <Label class="section-title" text="Our Vision" />
          
          <!-- Progress Level Bar -->
          <GridLayout rows="auto" columns="auto, *" class="level-progress">
            <StackLayout col="0" class="level-info">
              <Label text="LVL 42" class="level-number" />
              <Label text="Metaverse Pioneer" class="company-xp" />
            </StackLayout>
            <StackLayout col="1" class="progress-bar">
              <StackLayout class="progress-fill" width="75%" />
              <Label text="4.2M XP" class="progress-text" />
            </StackLayout>
          </GridLayout>
          
          <!-- Mission Cards -->
          <StackLayout class="mission-container">
            <Label text="Key Missions" class="mission-title" />
            
            <StackLayout class="mission-cards">
              <GridLayout rows="auto" columns="auto, *" class="mission-card completed">
                <StackLayout col="0" class="mission-icon">
                  <Label text="✓" class="mission-completion-badge" />
                  <Image src="~/assets/placeholder.jpg" class="mission-bg" />
                </StackLayout>
                <StackLayout col="1" class="mission-content">
                  <Label text="Democratize Tech Access" class="mission-name" />
                  <Label text="Making emerging tech accessible to everyone" textWrap="true" class="mission-desc" />
                  <GridLayout rows="auto" columns="*, auto" class="mission-progress completed">
                    <Label col="0" text="COMPLETED" class="progress-label" />
                    <Label col="1" text="+750 XP" class="progress-reward" />
                  </GridLayout>
                </StackLayout>
              </GridLayout>
            </StackLayout>
          </StackLayout>
          
          <Button @tap="navigateTo('connection-point')" class="journey-button secondary">
            <FormattedString>
              <Span text="NEXT STEP" class="button-text" />
            </FormattedString>
          </Button>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import { ref } from 'vue';
import useTheme from '../utils/useTheme';
import router from '../router';

export default {
  setup() {
    const activeSection = ref('entry-portal');
    const { enabled } = useTheme();
    
    // Navigation function to move between sections
    const navigateTo = (sectionId) => {
      activeSection.value = sectionId;
    };
    
    // Navigate to Services page using router
    const goToServices = () => {
      router.navigateToServices();
    };
    
    // Show tech details function
    const showTechDetails = (techId) => {
      // Navigate to details page with params
      console.log(`Opening details for: ${techId}`);
      // Uncomment below when TechDetails component is ready
      // router.navigateWithParams(TechDetails, { techId });
    };
    
    // Sample data for technologies
    const technologies = [
      {
        id: 'ar',
        name: 'Augmented Reality',
        userCount: 32,
        color: '0, 204, 255'
      },
      {
        id: 'vr',
        name: 'Virtual Reality',
        userCount: 18,
        color: '77, 58, 255'
      },
      {
        id: 'blockchain',
        name: 'Blockchain',
        userCount: 45,
        color: '255, 138, 0'
      },
      {
        id: 'ai',
        name: 'Artificial Intelligence',
        userCount: 64,
        color: '214, 51, 255'
      }
    ];
    
    // Sample data for services
    const services = [
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
      }
    ];
    
    return {
      activeSection,
      navigateTo,
      goToServices,
      technologies,
      services,
      showTechDetails,
      enabled
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

.journey-container {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 20;
}

.title-gradient {
  font-family: Orbitron, sans-serif;
  font-size: 32;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20;
  color: #00CCFF;
}

.ns-light .title-gradient {
  color: #0066CC;
}

.journey-subtitle {
  font-size: 16;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 8;
}

.ns-light .journey-subtitle {
  color: #1E1E1E;
}

.tech-line {
  height: 2;
  width: 50;
  background-color: #00CCFF;
  margin-bottom: 30;
  align-self: center;
}

.ns-light .tech-line {
  background-color: #0066CC;
}

.journey-button {
  background-color: transparent;
  border-width: 2;
  border-color: #00CCFF;
  border-radius: 8;
  height: 50;
  width: 200;
  margin-top: 40;
  color: #FFFFFF;
  font-size: 14;
  font-weight: bold;
}

.ns-light .journey-button {
  border-color: #0066CC;
  color: #0066CC;
}

.section-title {
  font-family: Orbitron, sans-serif;
  font-size: 24;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  margin-top: 20;
  margin-bottom: 20;
}

.ns-light .section-title {
  color: #1E1E1E;
}

.container {
  padding: 20;
}

.tech-grid {
  margin-bottom: 30;
}

.tech-card {
  margin: 8;
  background-color: #14161E;
  border-radius: 16;
  border-width: 1;
  border-color: rgba(0, 204, 255, 0.3);
}

.ns-light .tech-card {
  background-color: #FFFFFF;
  border-color: rgba(0, 102, 204, 0.3);
}

.card-image {
  height: 120;
  border-top-left-radius: 16;
  border-top-right-radius: 16;
}

.card-content {
  padding: 16;
}

.tech-name {
  color: #FFFFFF;
  font-size: 16;
  font-weight: bold;
  margin-bottom: 8;
}

.ns-light .tech-name {
  color: #1E1E1E;
}

.tech-users {
  flex-direction: row;
  align-items: center;
}

.user-count {
  color: #00CCFF;
  font-size: 14;
  font-weight: bold;
  margin-right: 4;
}

.ns-light .user-count {
  color: #0066CC;
}

.user-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12;
}

.ns-light .user-label {
  color: rgba(30, 30, 30, 0.7);
}

.service-cards {
  margin-bottom: 30;
}

.service-card {
  margin-bottom: 20;
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

.level-progress {
  margin-bottom: 24;
}

.level-number {
  color: #00CCFF;
  font-size: 18;
  font-weight: bold;
}

.ns-light .level-number {
  color: #0066CC;
}

.company-xp {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12;
}

.ns-light .company-xp {
  color: rgba(30, 30, 30, 0.7);
}

.progress-bar {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4;
  height: 20;
  margin-left: 16;
  margin-right: 16;
}

.ns-light .progress-bar {
  background-color: rgba(30, 30, 30, 0.1);
}

.progress-fill {
  background-color: #00CCFF;
  border-radius: 4;
  height: 20;
}

.ns-light .progress-fill {
  background-color: #0066CC;
}

.progress-text {
  text-align: center;
  color: #FFFFFF;
  font-size: 12;
  font-weight: bold;
  vertical-align: middle;
}

.ns-light .progress-text {
  color: #1E1E1E;
}

.mission-container {
  margin-bottom: 24;
}

.mission-title {
  color: #FFFFFF;
  font-size: 20;
  font-weight: bold;
  margin-bottom: 16;
}

.ns-light .mission-title {
  color: #1E1E1E;
}

.mission-card {
  background-color: #14161E;
  border-radius: 16;
  padding: 16;
  margin-bottom: 16;
}

.ns-light .mission-card {
  background-color: #FFFFFF;
}

.mission-icon {
  width: 60;
  height: 60;
  margin-right: 16;
}

.mission-bg {
  border-radius: 8;
  width: 100%;
  height: 100%;
}

.mission-completion-badge {
  background-color: #00CCFF;
  color: #FFFFFF;
  font-size: 14;
  font-weight: bold;
  text-align: center;
  width: 24;
  height: 24;
  border-radius: 12;
  position: absolute;
  top: -8;
  right: -8;
}

.ns-light .mission-completion-badge {
  background-color: #0066CC;
}

.mission-name {
  color: #FFFFFF;
  font-size: 16;
  font-weight: bold;
  margin-bottom: 4;
}

.ns-light .mission-name {
  color: #1E1E1E;
}

.mission-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14;
  margin-bottom: 8;
}

.ns-light .mission-desc {
  color: rgba(30, 30, 30, 0.7);
}

.mission-progress {
  margin-top: 8;
}

.progress-label {
  color: #00CCFF;
  font-size: 12;
  font-weight: bold;
}

.ns-light .progress-label {
  color: #0066CC;
}

.progress-reward {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12;
}

.ns-light .progress-reward {
  color: rgba(30, 30, 30, 0.7);
}
</style>
