<template>
  <div class="home">
    <div 
      class="oneNews"
      v-for="item in news" 
      :key="item.title"
    >
      <h3>{{ item.title }}</h3>
      <p v-html="item.description"></p>
      <a :href="item.originallink">기사 보러가기</a>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/news';

export default {
  name: "HomeView",
  data() {
    return {
      store: useCounterStore(),
      news: {},
    };
  },
  mounted() {
    this.store.getData();
    this.news = this.store.data.items;

    console.log(this.news);
  },
};
</script>

<style lang="scss">
  .oneNews {
    border: 1px solid black;
  }
</style>