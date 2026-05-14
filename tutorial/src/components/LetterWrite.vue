<template>
    <div class="LetterWrite">
        <form @submit.prevent="handleSubmit">
            <input name="name" type="text" placeholder="이름" v-model="name" />
            <input name="email" type="text" placeholder="메일" v-model="email" />
            <input name="text" class="detail" type="text" placeholder="내용" v-model="text" />
            <input class="btn" type="submit" value="전송" />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            text: "",
        };
    },
    methods: {
        handleSubmit() {
            let value = { name: this.name, email: this.email, text: this.text };
            this.$emit("aaa", value);
        },
    },
};
</script>

<style lang="scss" scoped>
.LetterWrite {
    flex: 1;
    padding: 20px;
    color: black;
    background-color: rgb(209, 232, 241);

    input {
        box-sizing: border-box;
        color: black;
        background-color: rgb(203, 197, 236);
        width: 100%;
        height: 30px;
        padding: 5px;
        margin-bottom: 10px;

        &.detail {
            height: 70px;
        }

        &.btn {
            background-color: black;
            color: white;
            margin: 0;
        }
    }
}
</style>