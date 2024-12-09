import { App, InjectionKey, Plugin } from 'vue'
import VueFeedbackDialog from './components/VueFeedbackDialog.vue'
import { type VueFeedbackDialogPluginOptions } from './interfaces/VueFeedbackDialogPluginOptions.ts'

export const FEEDBACK_OPTIONS_KEY: InjectionKey<VueFeedbackDialogPluginOptions> = Symbol('feedbackOptions')

export const VueFeedbackPlugin: Plugin = {
  install: (app: App, options: VueFeedbackDialogPluginOptions) => {
    // Check if Quasar is already installed
    if (!app.config.globalProperties.$q) {
      console.warn('Quasar is required for this plugin. Please install Quasar in your main app.')
    }

    app.provide(FEEDBACK_OPTIONS_KEY, options)

    // Register components
    app.component('VueFeedbackDialog', VueFeedbackDialog)
  }
}

export default VueFeedbackPlugin
