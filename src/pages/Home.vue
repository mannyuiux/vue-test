<template>
  <div>
    <Banner :animal-name="animal" />
    <BatsmenPopup v-model="isPopupActive" />
    <button class="btn" @click="togglePopup">
      Open
    </button>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BatsmenPopup from '../components/BatsmenPopup.vue';

export default {
  name: "Home",
  components: {
    Banner,
    BatsmenPopup,
  },
  data() {
    return {
      animal: "Lion",
      isPopupActive: false,
    };
  },
  props: {},
  methods: {
    togglePopup() {
      this.isPopupActive = !this.isPopupActive; // !true -> false
    },
  },
};
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
}
</style>