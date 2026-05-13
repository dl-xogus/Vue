<template>
  <div class="hello">
    <h1>변수 바인딩 : {{ title }}</h1>

    <article>
      <h1>HTML형식 출력</h1>

      <!-- v-html="htmlTag" : html 태그로 넣는 방법 -->
      <p v-html="htmlTag"></p>
    </article>

    <article>
      <h1>이미지 주소값</h1>

      <!-- v-bind: : vue에서 js를 사용할때 지금까지의 {}과 비슷함 -->
      <img v-bind:src="imgSrc" />
      <img v-bind:src="imgSrc2" />
    </article>

    <article>
      <h1>Class</h1>

      <!-- {} 값에 따라서 클래스가 들어감 -->
      <button v-bind:class="{ active: true }">토글버튼</button>
      <!-- v-bind:를 줄여서 :만 써도 가능 -->
      <button :class="true ? 'active' : ''">토글버튼</button>
      <!-- [] 배열을 이용해 클래스를 여러 개 지정 가능 -->
      <button :class="['a', 'b']">토글버튼</button>
    </article>

    <article>
      <h1>if 제어문</h1>

      <!-- v-if, v-else로 if 제어문 만드는 방법 -->
      <div v-if="true">로그인 전</div>
      <div v-else>로그인 후</div>
    </article>

    <article>
      <h1>for 반복문</h1>

      <!-- v-for="변수명 in 배열" | .map()처럼 :key를 꼭 넣어줘야함 -->
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </article>

    <article>
      <h1>이벤트 발생</h1>

      <!-- v-on:click="함수명" : 이벤트 걸어주는 방법 -->
      <!-- @ → v-on:의 생략 기호 -->
      <button @click="increment">{{ count }}</button>
    </article>

    <article>
      <h1>Props값 출력</h1>

      <p>msg = {{ msg }}</p>
      <p>item = {{ item }}</p>
    </article>
  </div>
</template>

<script>
import logoImg from "../assets/logo.png";

export default {
  /* data : 변수 선언 하는 곳 */
  data() {
    return {
      title: "World",
      htmlTag: "<button>저장</button>",
      imgSrc: "./logo.png", // public 폴더 안에 이미지를 사용
      imgSrc2: logoImg, // 이미지를 import해서 사용
      items: [
        { id: 0, name: "사과" },
        { id: 1, name: "수박" },
        { id: 2, name: "오렌지" },
      ],
      count: 0,
    };
  },
  /* methods : 함수를 정의 하는 곳 */
  methods: {
    /* function을 사용하지 않아도 됨 */
    increment() {
      this.count++;
      this.$emit("aaa", this.count);  // $emit : 자식에서 부모로 이벤트를 전달
    },
    handleScroll() {
      console.log(window.scrollY);
    },
  },
  /* 마운트 될때 이벤트 추가 */
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  /* 마운트 해제될 때 이벤트 삭제 */
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  beforeUpdate() {
    console.log("업데이트 전");
  },
  updated() {
    console.log("업데이트 후");
  },
  unmounted() {
    console.log("홈에서 나갔습니다.");
  },
  name: "HelloWorld",
  props: ["msg", "item"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active {
  color: red;
}
article {
  border-bottom: 1px solid white;
  padding: 50px 0;
}
h1 {
  margin-bottom: 50px;
}
</style>
