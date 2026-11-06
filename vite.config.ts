import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuerouter from 'vue-router/vite'
import tailwindcss from '@tailwindcss/vite'
import icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    vuerouter({
      dts: 'src/shims/route-map.d.ts',
    }),
    vue(),
    tailwindcss(),
    icons(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
