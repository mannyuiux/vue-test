<template>
  <div>
    <h2>Results for {{ userEntered }}</h2>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      userEntered: this.$route.query.q,
    };
  },
  method: {
    handleSearch() {
      console.log(this.userEntered);
    },
  },
};
</script>