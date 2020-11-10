<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      test: "hello world",
    };
  },
  methods: {},
};
</script>
<style lang="scss">
@import "./assets/sass/main.scss";
</style>