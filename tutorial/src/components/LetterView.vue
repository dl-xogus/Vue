<template>
    <div class="LetterView">
        <div class="title">
            <p>이름: {{ value?.name }}</p>
            <p>메일: {{ value?.email }}</p>
        </div>
        <div class="detail">
            <p>{{ value?.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "value",
    ],
};
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}

.LetterView {
    text-align: left;
    color: black;
    background-color: white;
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .title {
        padding-bottom: 20px;
    }

    .detail {
        color: black;
        background-color: rgb(203, 197, 236);
        border: 1px solid black;
        padding: 10px;
        flex-grow: 1;
    }
}
</style>