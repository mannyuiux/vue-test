<template>
  <div id="app">
    <Header />
    <router-view /> <!--its a component of vue-router package -->
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>