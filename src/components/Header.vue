<template>
  <header>
    <div class="flex">
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/contact"> Contact </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    
  },
  computed: {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss">
header {
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  a {
    margin: 0 10px;
  }
}
</style>