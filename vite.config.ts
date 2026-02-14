import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'vue-router/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import TailwindCSS from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/shims/route-map.d.ts',
    }),
    Vue(),
    VueDevTools(),
    TailwindCSS(),
    AutoImport({
      imports: [
        'vue',
        {
          'vue-router': ['useRoute', 'useRouter'],
          '@vueuse/core': [],
        },
      ],
      dirs: ['src/composables', 'src/utils'],
      dts: 'src/shims/auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({
      resolvers: [
        IconsResolver({ prefix: '' }),
      ],
      dts: 'src/shims/components.d.ts',
    }),
    Icons(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
