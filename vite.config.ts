import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar(),
    dts()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueFeedbackPlugin',
      fileName: format => `vue-feedback-plugin.${format}.js`
    },
    rollupOptions: {
      external: [
        'vue',
        'quasar',
        '@quasar/extras',
        /^@quasar\/extras\/.*/,
        /^quasar\/.*/
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          'quasar': 'Quasar',
          'quasar/src/components/badge/QBadge.js': 'QBadge',
          'quasar/src/components/fab/QFab.js': 'QFab',
          'quasar/src/composables/use-quasar/use-quasar.js': 'useQuasar',
          'quasar/src/components/card/QCardSection.js': 'QCardSection',
          'quasar/src/components/card/QCard.js': 'QCard',
          'quasar/src/components/dialog/QDialog.js': 'QDialog',
          'quasar/src/composables/use-dialog-plugin-component/use-dialog-plugin-component.js': 'useDialogPluginComponent',
          'quasar/src/components/item/QItemLabel.js': 'QItemLabel',
          'quasar/src/components/item/QItemSection.js': 'QItemSection',
          'quasar/src/components/item/QItem.js': 'QItem',
          'quasar/src/components/item/QList.js': 'QList',
          'quasar/src/components/space/QSpace.js': 'QSpace',
          'quasar/src/components/btn/QBtn.js': 'QBtn',
          'quasar/src/components/card/QCardActions.js': 'QCardActions',
          'quasar/src/components/input/QInput.js': 'QInput',
          'quasar/src/components/form/QForm.js': 'QForm'
        },
        assetFileNames: 'vue-feedback-dialog.css'
      }
    },
    sourcemap: true,
    cssCodeSplit: false
  }
})
