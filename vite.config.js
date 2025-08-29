import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ghPages } from 'vite-plugin-gh-pages'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        {
            name: 'github-pages-404-fix',
            closeBundle() {
                const buildDir = path.resolve(__dirname, 'dist')
                const indexFile = path.join(buildDir, 'index.html')
                const targetFile = path.join(buildDir, '404.html')

                if (fs.existsSync(indexFile)) {
                    fs.copyFileSync(indexFile, targetFile)
                }
            }
        },
        ghPages()
    ],
    base: '/dao3-voxels-viewer/'
})
