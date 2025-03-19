<template>
  <Page>
    <ActionBar title="World of Unreal" />
    <StackLayout class="page">
      <Home />
    </StackLayout>
  </Page>
</template>

<script>
import Home from './Home.vue';

export default {
  components: {
    Home
  }
};
</script>

<style lang="scss">
.page {
  background-color: var(--background-color);
}

ActionBar {
  background-color: var(--primary-color);
  color: white;
}

Label {
  font-size: 24;
  margin: 16;
  text-align: center;
}
</style> 