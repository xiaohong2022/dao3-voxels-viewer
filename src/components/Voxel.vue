<script setup>
/// <reference types="../types.d.ts" />

import { computed, ref, watch } from 'vue';
import { ticks } from '../scripts/tick';
import VoxelFace from './VoxelFace.vue';

const props = defineProps({
    textures: Array,
    rotate: [Boolean, Number],
    rotateX: Number,
    rotateY: Number,
    light: Boolean,
    animate: Boolean,
})

let aniTicks_ = 0;
const aniTicks = computed(() => {
    if (props.animate && props.textures?.length) aniTicks_ = Math.floor(ticks.value / ((64 * 4) / (1000 / 60)));
    return aniTicks_;
})

const nowTextures = computed(() => {
    return props.textures[aniTicks.value % props.textures.length]
})

const rotateX = computed(() => {
    return -15 + (props.rotateX || 0)
})
const rotateY = computed(() => {
    return 60 + (props.rotateY || 0)
        + (props.rotate === 0 ? 0 : 0)
        + (props.rotate === 1 ? 90 : 0)
        + (props.rotate === 2 ? 180 : 0)
        + (props.rotate === 3 ? 270 : 0)
})
</script>

<template>
    <div class="voxel-outline">
        <div :class="{
            voxel: true,
            rotate: rotate === true
        }">
            <VoxelFace type="front" :texture="nowTextures[0]" :light />
            <VoxelFace type="after" :texture="nowTextures[1]" :light />
            <VoxelFace type="under" :texture="nowTextures[2]" :light />
            <VoxelFace type="upper" :texture="nowTextures[3]" :light />
            <VoxelFace type="right" :texture="nowTextures[4]" :light />
            <VoxelFace type="left" :texture="nowTextures[5]" :light />
        </div>
    </div>
</template>

<style scoped>
.voxel-outline {
    width: 108px;
    height: 108px;
    transform: translateY(32px);
}

.voxel {
    position: relative;
    width: 16px;
    height: 16px;
    margin: 0 auto;
    transform-style: preserve-3d;
    image-rendering: pixelated;
    transform: scale(3.8) rotateX(v-bind("rotateX + 'deg'")) rotateY(v-bind("rotateY + 'deg'"));
    transition: transform .5s ease-in-out;
}

@keyframes rotate-animation {
    0% {
        transform: scale(3.8) rotateX(v-bind("rotateX + 'deg'")) rotateY(v-bind("rotateY + 'deg'"));
    }

    to {
        transform: scale(3.8) rotateX(v-bind("rotateX + 'deg'")) rotateY(v-bind("(rotateY + 360) + 'deg'"));
    }
}

.rotate {
    animation: rotate-animation 5s infinite linear;
}

/* 
.rotate0 {
    transform: scale(3.8) rotateX(-15deg) rotateY(60deg)
}

.rotate1 {
    transform: scale(3.8) rotateX(-15deg) rotateY(150deg)
}

.rotate2 {
    transform: scale(3.8) rotateX(-15deg) rotateY(240deg)
}

.rotate3 {
    transform: scale(3.8) rotateX(-15deg) rotateY(330deg)
} */
</style>