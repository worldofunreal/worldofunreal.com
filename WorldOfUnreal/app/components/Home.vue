<template>
  <StackLayout class="home">
    <Label class="h1" text="World of Unreal" />
    <Label class="subtitle" text="Crafting Digital Experiences" />
    
    <ScrollView orientation="horizontal" class="services-scroll">
      <StackLayout orientation="horizontal" class="services-container">
        <StackLayout v-for="service in services" :key="service.title" class="service-card">
          <Label :text="service.title" class="service-title" />
          <Label :text="service.description" textWrap="true" class="service-description" />
        </StackLayout>
      </StackLayout>
    </ScrollView>

    <Label class="h2" text="Latest Projects" />
    <StackLayout class="projects-container">
      <StackLayout v-for="project in projects" :key="project.title" class="project-card">
        <Image :src="project.image" stretch="aspectFill" height="200" />
        <Label :text="project.title" class="project-title" />
        <Label :text="project.description" textWrap="true" class="project-description" />
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Unreal Engine Development",
          description: "Custom game and interactive experience development using Unreal Engine"
        },
        {
          title: "Web3 Integration",
          description: "Blockchain and NFT integration for digital experiences"
        },
        {
          title: "Mobile Apps",
          description: "Cross-platform mobile applications with native performance"
        }
      ],
      projects: [
        {
          title: "Metaverse Experience",
          description: "An immersive virtual world built with Unreal Engine 5",
          image: "~/assets/project1.jpg"
        },
        {
          title: "NFT Marketplace",
          description: "A decentralized marketplace for digital assets",
          image: "~/assets/project2.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.home {
  padding: 16;
}

.subtitle {
  color: var(--text-muted);
  font-size: 16;
  margin-bottom: 24;
}

.services-scroll {
  margin: 16 -16;
}

.services-container {
  padding: 0 16;
}

.service-card {
  background-color: var(--card-color);
  border-radius: 8;
  padding: 16;
  margin-right: 16;
  width: 280;
}

.service-title {
  color: var(--primary-color);
  font-size: 18;
  font-weight: bold;
  margin-bottom: 8;
}

.service-description {
  color: var(--text-muted);
  font-size: 14;
}

.projects-container {
  margin-top: 24;
}

.project-card {
  background-color: var(--card-color);
  border-radius: 8;
  margin-bottom: 16;
  overflow: hidden;
}

.project-title {
  color: var(--text-color);
  font-size: 18;
  font-weight: bold;
  padding: 16 16 8;
}

.project-description {
  color: var(--text-muted);
  font-size: 14;
  padding: 0 16 16;
}
</style>
