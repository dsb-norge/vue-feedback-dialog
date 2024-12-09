import { VueFeedbackPayload } from '../interfaces/VueFeedbackPayload.ts'

export interface VueFeedbackDialogPluginOptions {
  text: {
    headerInfo: string
    headerDialog: string
    dialogLeftControlText: string
    infoLeftControlText: string
    dialogRightControlText: string
    infoRightControlText: string
    reporter: string
    reporterError: string
    description: string
    descriptionError: string
    email: string
    emailError: string
  }
  initialFormValues?: () => VueFeedbackPayload
  layout: {
    color: string
    border: string
    background: string
  }
}
