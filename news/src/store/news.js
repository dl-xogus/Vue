import { defineStore } from "pinia";

export const useCounterStore = defineStore('news', {
    state: () => ({
        data: {},
    }),
    actions: {
        async getData() {
            const res = await fetch("http://localhost:4000/news");
            const data = await res.json();
            this.data = data;
        },
    },
})