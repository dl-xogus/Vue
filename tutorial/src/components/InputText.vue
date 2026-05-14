<template>
  <div>
    <input type="text" :name="name" :placeholder="placeholder" @input="changeText" />
  </div>
</template>

<script>
export default {
  methods: {
    changeText(e) {
      this.$emit("aaa", e.target.value, this.name,);   // this.$emit(보내줄 부모의 이벤트 명칭, 보내줄 값 1, 보내줄 값 2);
    },
  },
  props: [
    "name",
    "placeholder"
  ],
};
</script>

<style lang="scss" scoped></style>
