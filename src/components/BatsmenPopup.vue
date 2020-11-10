<template>
  <div class="batsmen-popup" v-if="showDialog">
    <div>
      <ul>
        <li v-for="name of batsmen" :key="name">{{ name }}</li>
      </ul>
      <button class="btn" @click="handleClose">Close</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "BatsmenPopup",
  model: {
    prop: "active",
    event: "change",
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showDialog: {
      get() {
        return this.active;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
  data() {
    return {
      batsmen: ["Kohli", "Dhoni", "Pant", "Shami", "Washington"],
    };
  },
  methods: {
    handleClose() {
      this.$emit('change', false);
    }
  },
};
</script>
<style scoped>
.batsmen-popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.batsmen-popup ul {
  background-color: #fff;
  border-radius: 5px;
  width: 300px;
  padding: 20px 40px;
}

.btn {
  background-color: red;
}
</style>