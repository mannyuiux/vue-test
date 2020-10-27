<template>
  <div class="search-form">
    <input
      type="search"
      :placeholder="placeHolderText"
      v-model="userInput"
      @keydown.enter="handleSearch"
    />
  </div>
</template>
<script>
export default {
  name: "Search",
  props: {
    placeHolderText: {
      type: String,
      default: "Search",
      required: true,
    },
  },
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    handleSearch() {
      this.$router.push(`/results?q=${this.userInput}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  max-width: 500px;
  width: 100%;
}
input {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 0;
  border-radius: 4px;
  box-shadow: none;
}
</style>