import Components from 'unplugin-vue-components/vite';
import Inspect from 'vite-plugin-inspect';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
    Components({
      extensions: ['vue', 'md', 'svg'],
      directoryAsNamespace: true,
      dts: true,
      globalNamespaces: ['global'],
    }),
    Pages(),
    Layouts(),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@heroicons/vue/20/solid': ['UserIcon', 'EyeIcon', 'EyeSlashIcon'],
        },
      ],
      eslintrc: { enabled: true },
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
