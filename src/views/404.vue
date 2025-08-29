<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <Header></Header>
    <div>
        <h1>404 Not Found</h1>
        <p>啊哦，貌似找不到这个方块呢！</p>
        <button @click="$router.push('/')">回到首页</button>
    </div>
</template>

<style scoped>
div {
    text-align: center;
    margin-top: 10vh
}
</style>