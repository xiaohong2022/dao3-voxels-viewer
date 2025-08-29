<script setup>
/// <reference types="../types.d.ts" />

defineProps({
    type: String,
    /** @type {VoxelTexture} */
    texture: Array,
    light: Boolean
})
</script>

<template>
    <div :class="type" :="{
        class: texture[2] == 'initial' ? '' : 'liquid',
        style: {
            backgroundPosition: texture[0] || '',
            backgroundColor: texture[2] == 'initial' ? '' : texture[2],
            boxShadow: light ? (texture[1] || '') : '',
        }
    }"></div>
</template>

<style scoped>
div {
    position: absolute;
    width: 16px;
    height: 16px;
}

.front {
    transform: rotateY(270deg) translateX(-8px);
    transform-origin: center left;
}

.after {
    transform: rotateY(-270deg) translateX(8px);
    transform-origin: top right;
}

.under {
    transform: rotateX(90deg) translateY(8px);
    transform-origin: bottom center;
}

.upper {
    transform: rotateX(-90deg) rotateY(180deg) translateY(-8px);
    transform-origin: top center;
}

.right {
    transform: translateZ(8px);
}

.left {
    transform: translateZ(-8px) rotateY(180deg);
}


@keyframes liquid-move {
    0% {
        background-position: 0 0
    }

    to {
        background-position: -256px -256px
    }
}

.liquid {
    background-image: url(https://view.dao3.fun/_next/static/media/water.96d90d49.png);
    animation: liquid-move 10s infinite linear;
}

:not(.liquid) {
    background-image: url(https://static.dao3.fun/block/QmXfXeXVYMV3tQdSX5fVY8czopNE936tdQbdKypvu4bTxS.png)
}
</style>