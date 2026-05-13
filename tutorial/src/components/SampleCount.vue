<template>
  <div class="SampleCount">
    <button @click="down">-</button>
    <p>{{ count }}</p>
    <button @click="up">+</button>
  </div>
</template>

<script>
export default {
  name: "SampleCount",
  data() {
    return { count: 0 };
  },
  methods: {
    up() {
      this.count++;
    },
    down() {
      this.count--;
    },
  },
};
</script>

<style lang="scss" scoped>
.SampleCount {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
