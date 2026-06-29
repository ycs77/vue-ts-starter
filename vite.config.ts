import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'vue-router/vite'
import TailwindCSS from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/shims/route-map.d.ts',
    }),
    Vue(),
    TailwindCSS(),
    Icons(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
