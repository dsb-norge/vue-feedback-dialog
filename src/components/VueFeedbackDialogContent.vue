<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import VueFeedbackDialogContentInformation from './VueFeedbackDialogContentInformation.vue'
import { VueFeedbackDialogPluginOptions } from '../interfaces/VueFeedbackDialogPluginOptions.ts'
import { ref } from 'vue'
import VueFeedbackDialogContentForm from './VueFeedbackDialogContentForm.vue'
import { VueFeedbackPayload } from '../interfaces/VueFeedbackPayload.ts'

const props = defineProps<{
  options?: VueFeedbackDialogPluginOptions
  messages?: { header: string; info: string }[]
}>()

// eslint-disable-next-line vue/define-emits-declaration
defineEmits([
  ...useDialogPluginComponent.emits
])

const sendFeedbackMode = ref<boolean>(false)

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

function onDialogShow () {
  sendFeedbackMode.value = !props.messages
}

function goBack () {
  if (props.messages) {
    sendFeedbackMode.value = false
  } else {
    onDialogCancel()
  }
}

function onOk (value: VueFeedbackPayload) {
  onDialogOK(value)
}
</script>

<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    @show="onDialogShow"
  >
    <q-card class="q-dialog-plugin">
      <q-card-section
        class="q-mx-none q-px-none"
      >
        <VueFeedbackDialogContentInformation
          v-if="!!props.messages && !sendFeedbackMode"
          class="dialog-info"
          :options="props.options"
          :messages="props.messages"
          @ok="sendFeedbackMode = true"
          @cancel="onDialogCancel"
        />
        <VueFeedbackDialogContentForm
          v-else
          class="dialog-input"
          :options="props.options"
          @submit="onOk"
          @cancel="goBack"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
