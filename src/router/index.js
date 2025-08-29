import { voxelsNameToId, voxelsTextureInfo } from "../scripts/voxels";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('../views/404.vue'),
        },
        {
            path: '/404',
            name: '404',
            component: () => import('../views/404.vue'),
        },
        {
            path: '/',
            name: 'index',
            component: () => import('../views/Index.vue')
        },
        {
            path: '/:name',
            name: 'info',
            component: () => import('../views/Info.vue')
        },
    ]
})

router.beforeEach((to) => {
    if (to.name == 'info') {
        if (!isNaN(Number(to.params.name))) {
            let id = Number(to.params.name) % 0x4000
            let r = Math.floor(Number(to.params.name) / 0x4000)

            if (r < 0 || r > 3) return '/404';

            let name = Object.entries(voxelsNameToId).find(v => v[1] == id)?.[0]
            if (!name) return '/404'

            let texture = voxelsTextureInfo.reduce((a, b) => [].concat(a, b[1]), []).find(v => v[0] == name)?.[1];
            if (!texture) return '/404'

            let isfluid = texture.find(v => v.find(v => v[2] !== 'initial'))

            return '/' + name + ((r == 0 || isfluid) ? '' : '?r=' + r);
        }

        if (typeof voxelsNameToId[to.params.name] == 'undefined') return '/404';
    }
})