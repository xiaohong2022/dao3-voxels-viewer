<script setup>
import { computed, ref } from 'vue';
import { voxelsTextureInfo, getAllVoxels } from '../scripts/voxels';
import Voxel from '../components/Voxel.vue';
import Header from '../components/Header.vue';
import { lightTexture, dynamicTexture } from '../stores/Index';

const selectId = ref(0);
const search = ref("");
const voxelsData = computed(() => {
    if (selectId.value == -1) {
        return getAllVoxels().filter(v => v[0].includes(search.value));
    }
    return voxelsTextureInfo[selectId.value][1].filter(v => v[0].includes(search.value));
})
</script>

<template>
    <Header>
        <label>
            <input type="checkbox" v-model="lightTexture" /> 发光纹理
        </label>
        <label>
            <input type="checkbox" v-model="dynamicTexture" /> 动态纹理
        </label>
    </Header>
    <div class="sidebar">
        <div @click="selectId = -1" :selected="selectId == -1 ? '' : void 0">全部</div>
        <div v-for="([name], index) in voxelsTextureInfo" @click="selectId = index"
            :selected="selectId == index ? '' : void 0">
            {{ name }}
        </div>
    </div>
    <main>
        <input class="search" placeholder="搜索方块" v-model="search" />
        <div class="voxels-list">
            <span style="margin: 0 8px 24px; width: 100%">共 {{ voxelsData.length }} 个方块</span>
            <router-link v-for="data in voxelsData" :to="'/' + data[0]">
                <Voxel :textures="data[1]" :animate="dynamicTexture" style="pointer-events: none;"
                    :light="lightTexture" />
                <span :title="data[0]">{{ data[0] }}</span>
            </router-link>
        </div>
    </main>
</template>

<style scoped>
.sidebar {
    width: 70px;
    height: 100%;
    border-right: solid 1px rgba(89, 89, 89, 0.898);

    >div {
        padding: 8px;
        text-align: center;
        cursor: pointer;

        &:hover,
        &[selected] {
            background-color: rgba(89, 89, 89, 0.898);
        }
    }
}

main {
    position: absolute;
    top: 50px;
    left: 70px;
    width: calc(100% - 70px);
    height: calc(100% - 50px);
}

.search {
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    padding: 5px 15px;
    font-size: 15px;
    color: #fff;
    background-color: #0000;
    border-bottom: solid 1px rgba(89, 89, 89, 0.898);

    &::placeholder {
        color: #fff7
    }
}

.voxels-list {
    padding: 16px 6px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    height: calc(100% - 40px);


    >a {
        position: relative;
        width: 108px;
        height: 120px;
        cursor: pointer;

        >.voxel-outline {
            transition: .3s;
        }

        &:hover>.voxel-outline {
            transform: translateY(32px) scale(1.1);
        }

        >span {
            position: absolute;
            bottom: 18px;
            font-size: small;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            color: #fff;
            pointer-events: none;
            z-index: 100;
            font-size: 13px;
        }
    }
}
</style>
