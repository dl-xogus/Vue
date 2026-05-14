import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        data: null,
    }),
    actions: {
        // `this`에 의존하므로 화살표 함수를 사용할 수 없습니다
        increment() {
            this.count++
        },
        down() {
            this.count--
        },
        async getData() {
            const res = await fetch("https://react-todolist-xi-six.vercel.app/todo");
            const data = await res.json();
            this.data = data;

            console.log(this.data);
        },
    },
})