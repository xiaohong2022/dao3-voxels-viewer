import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ghPages()
    ],
    base: '/dao3-voxels-viewer/'
})
