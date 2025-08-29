<template>
    <header>
        <router-link to="/">神奇代码岛 方块查看器</router-link>
        <div style="flex: 1"></div>
        <slot />
    </header>
</template>

<style>
header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    border-bottom: solid 1px rgba(89, 89, 89, 0.898);
    line-height: 50px;
    gap: 8px;
}
</style>