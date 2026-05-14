<template>
  <div>
    <!-- @submit.prevent : e.preventDefault()를 submit이벤트 안에 안넣고 바로 붙혀서 사용가능 -->
    <form @submit.prevent="handleSave">
      <!-- v-model : input의 value값을 변수에 넣을 수 있음 -->
      <!-- 한글을 입력할 경우 하나의 글자가 완성 될때까지 출력안됨 (한박자 느리게 출력) -->
      <input type="text" v-model="name" />
      <p>{{ name }}</p>

      <!-- @input : 기존의 onChange와 같음 -->
      <input type="text" @input="changeText" />
      <p>{{ email }}</p>

      <InputText name="tel" placeholder="전화번호를 입력해주세요." @aaa="childFun" />  <!-- 커스텀 이벤트로 자식의 값을 받을 수 있음 -->
      <InputText name="search" placeholder="검색어를 입력해주세요." @aaa="childFun" />

      <input type="submit" value="저장" />

      <p>tel: {{ addData.tel }}</p>
      <p>search: {{ addData.search }}</p>
    </form>
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue';

export default {
  components: {
    InputText,
  },
  data() {
    return {
      name: "",
      email: "asd@email.com",
      addData: {},
    };
  },
  methods: {
    changeText(e) {
      this.email = e.target.value;
    },
    handleSave(e) {
      console.log(e.target);
    },
    childFun(v, name) {
      const value = { [name]: v };
      this.addData = {...this.addData, ...value};
      /* value를 저장 시킬때 {}안에 넣어서 저장했기 때문에 ...value로 펼쳐서 넣어줘야함 */
    },
  },
};
</script>

<style lang="scss" scoped>
/* scoped : module.scss처럼 해당 파일만 적용되게 됨 */
</style>
