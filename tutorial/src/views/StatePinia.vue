<template>
    <div class="pinia">
        <button @click="store.down">-</button>
        <p>{{ store.count }}</p>
        <button @click="store.increment">+</button>
    </div>
</template>

<script>
import { useCounterStore } from '@/store/counter';

export default {
    data() {
        return {
            store: useCounterStore(),
        };
    },
    mounted() {
        this.store.getData();
    },
};
</script>

<style lang="scss" scoped>
.pinia {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: red;
}
</style>