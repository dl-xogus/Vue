<template>
  <div class="sample">
    <article>
      <h1>Sample - 1</h1>
      <SampleCount />
    </article>

    <article>
      <h1>Sample - 2</h1>
      <SampleIf />
    </article>
  </div>
</template>

<script>
import SampleCount from "@/components/SampleCount.vue";
import SampleIf from "@/components/SampleIf.vue";

export default {
  name: "SampleView",
  components: { SampleCount, SampleIf },
  data() {},
  methods() {},
};
</script>

<style lang="scss" scoped>
article {
  padding: 40px 0;
  border-top: 1px solid white;
}
h1 {
  margin-top: 0;
}
</style>