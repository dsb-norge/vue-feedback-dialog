<script setup lang="ts">
import { DialogChainObject, QFab, useQuasar } from 'quasar'
import { computed, inject, ref, shallowRef, useTemplateRef } from 'vue'
import VueFeedbackDialogContent from './VueFeedbackDialogContent.vue'
import { FEEDBACK_OPTIONS_KEY } from '../index.ts'
import { type VueFeedbackDialogPluginOptions } from '../interfaces/VueFeedbackDialogPluginOptions.ts'
import { type VueFeedbackPayload } from '../interfaces/VueFeedbackPayload.ts'

const props = defineProps<{
  meta?: string
  options?: VueFeedbackDialogPluginOptions
  messages?: { header: string; info: string }[]
}>()

const emit = defineEmits<{
  (event: 'feedback', value: VueFeedbackPayload): void
}>()

const q = useQuasar()
const fabRef = useTemplateRef<QFab>('fabRef')
const dialog = shallowRef<DialogChainObject | undefined>()
const pluginOptions = inject<VueFeedbackDialogPluginOptions>(FEEDBACK_OPTIONS_KEY)
const hasReadMessages = ref<boolean>(false)

const mergedOptions = {
  ...pluginOptions,
  ...props.options
}

function openDialog () {
  dialog.value = q.dialog({
    component: VueFeedbackDialogContent,
    componentProps: {
      options: mergedOptions,
      messages: props.messages
    }
  }).onOk(data => {
    onDialogHide()
    emit('feedback', {
      ...data,
      meta: props.meta,
      path: window.location.pathname
    })
  }).onCancel(() => {
    onDialogHide()
  }).onDismiss(() => {
    onDialogHide()
  })
}

function onDialogHide (closeDialog = false) {
  if (closeDialog) {
    dialog.value?.hide()
  }
  hasReadMessages.value = true
  dialog.value = undefined
  fabRef.value?.hide()
}

function onFabClick () {
  if (!dialog.value) {
    openDialog()
  } else {
    onDialogHide(true)
  }
}

const doDisplayMessageCountBadge = computed<boolean>(() => {
  return !!props.messages && !hasReadMessages.value
})
</script>

<template>
  <div class="feedback__wrapper">
    <div class="relative-position">
      <q-badge
        v-if="doDisplayMessageCountBadge"
        :label="(props.messages ?? [])?.length"
        rounded
        outline
        text-color="primary"
        floating
        class="bg-white"
        style="font-size: 1.4rem; z-index: 9999"
      />
      <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
      <q-fab
        ref="fabRef"
        icon="mdi-message-reply-text"
        color="primary"
        outline
        style="z-index: 9998"
        class="bg-white"
        @click="onFabClick"
      />
    </div>
  </div>
</template>

<style lang="scss">
.feedback__wrapper {
  position: fixed;
  z-index: 9999;
  bottom: 2rem;    // Increased from 1rem for more spacing
  right: 2.5rem;   // Increased from 1.5rem for more spacing
  width: 4rem;
  height: 4rem;
  border-radius: 100%;

  // Optional: Add a smooth transition for any hover effects
  transition: all 0.3s ease;

  // Optional: Add some spacing when hovering
  &:hover {
    transform: scale(1.05);
  }
}
</style>
