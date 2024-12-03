import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import RadixVueResolver from 'radix-vue/resolver'

export default defineConfig({
  plugins: [
    Vue(),
    VueDevTools(),
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
        RadixVueResolver(),
      ],
      dts: 'src/shims/components.d.ts',
    }),
    Pages(),
    Icons(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
