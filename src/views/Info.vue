<script setup>
import Header from '../components/Header.vue';
import { getAllVoxels, voxelsNameToId, transparentVoxels, lightVoxelsLevel, voxelsFriction, voxelsVelocity, voxelsEmissive } from '../scripts/voxels';
import Voxel from '../components/Voxel.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { lightTexture, dynamicTexture } from '../stores/Index';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(), router = useRouter();

const voxelTextures = computed(() => {
    return getAllVoxels().find(v => v[0] == route.params.name)?.[1];
})
const voxelId = computed(() => {
    return voxelsNameToId[route.params.name]
})

const isLight = computed(() => voxelTextures.value && voxelTextures.value.find(v => v.find(v => v[1]))); // 是否会发光
const lightColor = computed(() => {
    if (!isLight.value) return '#0000';

    let boxShadow = '';
    for (let v of voxelTextures.value) {
        for (let v2 of v) {
            if (v2[1]) boxShadow = v2[1];
        }
    }

    if (!boxShadow) return '#0000';
    return boxShadow.split(" 0px")[0];
});
const lightLevels = computed(() => {
    if (!isLight.value) return;

    return lightVoxelsLevel[route.params.name];
})

const isFluid = computed(() => voxelTextures.value && voxelTextures.value.find(v => v.find(v => v[2] !== 'initial'))); // 是否是流体
const fluidColor = computed(() => {
    if (!isFluid.value) return '#0000';

    let bgcolor = '';
    for (let v of voxelTextures.value) {
        for (let v2 of v) {
            if (v2[2]) bgcolor = v2[2];
        }
    }

    if (!bgcolor) return '#0000';
    return bgcolor;
});

const isAnimate = computed(() => voxelTextures.value && voxelTextures.value.length > 1); // 是否是动态方块
const isTransparent = computed(() => voxelTextures.value && transparentVoxels.includes(route.params.name)); // 是否是透明方块

const mode = ref(0);
const initMode = () => mode.value = isFluid.value ? 0 : Math.max(Math.min(Number(route.query.r), 3), 0) || 0;
const dragable = ref(true);
const dragging = ref(false);
const rotateX = ref(0);
const rotateY = ref(0);

const mouseSensitivity = 0.8; // 拖动鼠标灵敏度

function onViewerMouseDown({ x, y }) {
    if (!dragable.value) return;

    dragging.value = true;
    let startRotateX = rotateX.value;
    let startRotateY = rotateY.value;

    const onMouseMove = ({ x: x2, y: y2 }) => {
        rotateX.value = Math.max(Math.min(startRotateX - ((y2 - y) / mouseSensitivity), 105), -75); // 限制前后旋转角度，避免倒转
        rotateY.value = startRotateY + ((x2 - x) / mouseSensitivity);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
        dragging.value = false;
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
}

watch(mode, (newVal) => {
    if (newVal == -1) return;

    if (newVal == 0 && !route.query.r) return;

    router.push('?r=' + mode.value);
})

router.afterEach((to) => {
    if (to.name == 'info') {
        if (to.query.r != mode.value) {
            initMode();
        }
    }
})

onMounted(() => {
    initMode();
})


const codeX = ref(0);
const codeY = ref(0);
const codeZ = ref(0);
const codeEnableId = ref(true);

const voxelPositionChange = (ref) => watch(ref, (newval) => {
    ref.value = Math.max(0, Math.round(newval)) || 0;
});
voxelPositionChange(codeX);
voxelPositionChange(codeY);
voxelPositionChange(codeZ);
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
    <div class="body">
        <div class="viewer" :class="{ dragable, dragging }" @mousedown="onViewerMouseDown"
            @dblclick="rotateX = 0; rotateY = 0">
            <Voxel :textures="voxelTextures" :rotate="mode == -1 ? true : Number(mode)" v-if="voxelTextures"
                :animate="dynamicTexture" :light="lightTexture" :rotate-x="rotateX" :rotate-y="rotateY"></Voxel>
        </div>
        <div class="switch">
            <template v-if="!isFluid">
                <!-- {{ ['北', '东', '南', '西'][i] }} -->
                <div v-for="(i) in [0, 1, 2, 3]" :selected="mode == i ? '' : void 0" @click="mode = i; dragable = true">
                    {{ i }} ({{ ['+z', '+x', '-z', '-x'][i] }})
                </div>
            </template>
            <div v-else :selected="mode == 0 ? '' : void 0" @click="mode = 0; dragable = true">静止</div>
            <div :selected="mode == -1 ? '' : void 0" @click="mode = -1; dragable = false">旋转</div>
            <div v-if="rotateX || rotateY" @click="rotateX = 0; rotateY = 0">复位</div>
        </div>
        <main>
            <div class="info">
                <div class="info-item">
                    <span>名称：</span>
                    <code>{{ route.params.name }}</code>
                </div>
                <div class="info-item">
                    <span>ID{{ mode > 0 ? ' (包含旋转码)' : '' }}：</span>
                    <code><span class="num">{{ voxelId + (mode == -1 ? 0 : mode * 0x4000) }}</span></code>
                </div>
                <div class="info-item">
                    <span>方块属性：</span>
                    <code>{{ voxelId == 0 ? '空气' : (
                        isFluid ? '液体' : ('固体'
                            + (isLight ? ', 光源' : '')
                            + (isTransparent ? ', 透明' : '')
                        )
                    ) }}{{ isAnimate ? ', 动态纹理' : '' }}</code>
                </div>
                <div class="info-item" v-if="isFluid && voxelId != 0">
                    <span>液体颜色：</span>
                    <code>
                <span class="color" :style="{ background: fluidColor }"></span> {{ fluidColor }}
            </code>
                </div>
                <div class="info-item" v-if="isLight">
                    <span>光源颜色：</span>
                    <code>
                <span class="color" :style="{ background: lightColor }"></span> {{ lightColor }}
            </code>
                </div>
                <div class="info-item" v-if="isLight">
                    <span>光照等级 (单位: 格)：</span>
                    <code>{{
                        Array.isArray(lightLevels) ? `亮圈：${lightLevels[0]}, 暗圈：${lightLevels[1]}`
                            : lightLevels
                    }}</code>
                </div>
                <div class="info-item" v-if="isLight">
                    <span>光照强度：</span>
                    <code>{{ voxelsEmissive[voxelId] }}</code>
                </div>
                <div class="info-item" v-if="!isFluid">
                    <span>摩擦力系数：</span>
                    <code>{{ voxelsFriction[voxelId] }}</code>
                </div>
                <div class="info-item" v-if="!isFluid">
                    <span>施加力：</span>
                    <code>{{ voxelsVelocity[voxelId * 3] }}, {{ voxelsVelocity[voxelId * 3 + 1] }}, {{ voxelsVelocity[voxelId *
                        3 + 2] }}</code>
                </div>
            </div>
            <br>
            <h3>建造方块代码</h3>
            <div style="display: flex; gap: 6px;">
                <span>X</span>
                <input type="number" min="0" v-model="codeX" style="width: 60px" />
                <span>Y</span>
                <input type="number" min="0" v-model="codeY" style="width: 60px" />
                <span>Z</span>
                <input type="number" min="0" v-model="codeZ" style="width: 60px" />
                <label>
                    <input type="checkbox" v-model="codeEnableId" />
                    使用方块ID
                </label>
            </div>
            <div style="display: flex; margin-top: 12px;">
                <code style="flex: 1;">voxels.setVoxel{{ codeEnableId ? 'Id' : '' }}(<span class="num">{{ codeX }}</span>, <span
                class="num">{{ codeY }}</span>, <span class="num">{{ codeZ }}</span>, <span class="str"
                v-if="!codeEnableId">"{{ route.params.name }}"</span><span class="num" v-else>{{ voxelId + (mode == -1 ?
                    0 : mode * 0x4000) }}</span><template
                v-if="!codeEnableId && mode > 0">, <span class="num">{{ mode }}</span></template>)</code>
            </div>
        </main>
    </div>
</template>

<style scoped>
.body {
    width: 100%;
    overflow: auto;
    height: calc(100% - 50px);
}

.viewer {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(89, 89, 89, 0.898);

    &.dragable {
        cursor: grab;
    }

    &.dragging {
        cursor: grabbing;

        :deep(.voxel) {
            transition: 0s;
        }
    }
}

.switch {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    >div {
        padding: 8px 10px;
        cursor: pointer;

        &:hover {
            background-color: rgba(89, 89, 89, 0.434);
        }

        &[selected] {
            background-color: rgba(89, 89, 89, 0.898);
        }
    }
}


main {
    padding: 16px;
}

.info {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 12px;

    >.info-item {
        display: flex;
        flex-direction: row;
        align-items: center;

        code {
            flex: 1
        }
    }
}
</style>