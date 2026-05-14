<template>
  <div class="home">
    <article>
      <div
        class="oneNews"
        v-for="item in news"
        :key="item.title"
      >
        <h3 v-html="item.title"></h3>
        <small v-html="item.description"></small>
        <a :href="item.originallink">더 보기</a>
      </div>
    </article>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/news';

export default {
  name: "HomeView",
  data() {
    return {
      store: useCounterStore(),
    };
  },
  computed: {
    news() {
      return this.store.data.items;
    },
  },
  async mounted() {
    await this.store.getData();
  },
};
</script>

<style lang="scss">
  .oneNews {
    border: 1px solid #42b983;
    border-radius: 10px;
    box-shadow: 0 10px 10px 1px rgba($color: #000000, $alpha: 0.2);
    width: 100%;
    padding: 10px;

    h3 {
      margin-bottom: 10px;
    }
  }
  article {
    max-width: 1000px;
    display: grid;
    gap: 20px;
    text-align: left;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>