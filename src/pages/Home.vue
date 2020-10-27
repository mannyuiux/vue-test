<template>
  <div>
    <Banner />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },
  props: {},
};
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
}
</style>