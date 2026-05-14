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

    <article>
      <h1>Sample - 3</h1>
      <SampleInput />
      <div class="sample3">
        <LetterView :value="value"/>
        <LetterWrite @aaa="childValue" />
      </div>
    </article>
  </div>
</template>

<script>
import LetterView from "@/components/LetterView.vue";
import LetterWrite from "@/components/LetterWrite.vue";
import SampleCount from "@/components/SampleCount.vue";
import SampleIf from "@/components/SampleIf.vue";

export default {
  name: "SampleView",
  components: {
    SampleCount,
    SampleIf,
    LetterWrite,
    LetterView,
  },
  data() {
    return {
      value: {},
    };
  },
  methods: {
    childValue(v) {
      this.value = v;
    },
  },
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

.sample3 {
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>