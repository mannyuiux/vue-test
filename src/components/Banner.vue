<template>
  <div class="home-banner">
    <div class="picture" v-if="animalName">Lion</div>
    <div class="picture" v-else-if="animalName === 'Tiger'">Tiger</div>
    <div class="picture" v-else>Bear</div>
    <h1>Search your picture</h1>
    <Search place-holder-text="Search whatever you want" />
  </div>
</template>
<script>
import Search from "../components/Search.vue";

export default {
  name: "Banner",
  components: {
    Search,
  },
  props: {
    animalName: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.picture {
  color: #fff;
}
h1 {
  color: #fff;
}
.home-banner {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1599629395786-bb1970a6a02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format%2Ccompress&fit=crop&w=4999&h=594");
  padding: 200px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>