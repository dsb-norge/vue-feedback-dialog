<script setup lang="ts">
import { VueFeedbackDialogPluginOptions } from '../interfaces/VueFeedbackDialogPluginOptions.ts'

const props = defineProps<{
  options?: VueFeedbackDialogPluginOptions
  messages: { header: string; info: string }[]
}>()

const emit = defineEmits<{
  (event: 'cancel'): void
  (event: 'ok'): void
}>()
</script>

<template>
  <q-card
    flat
    class="column full-height"
  >
    <q-card-section>
      <h2>{{ props.options?.text?.headerInfo }} ({{ props.messages.length }})</h2>
    </q-card-section>

    <q-list class="q-mb-md">
      <q-item
        v-for="(message, index) in props.messages"
        :key="index"
      >
        <q-item-section>
          <q-item-label>
            <h3 class="text-weight-bold">
              {{ message.header }}
            </h3>
          </q-item-label>
          <q-item-label caption>
            <p class="text-black">
              {{ message.info }}
            </p>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-space />

    <q-card-actions>
      <q-btn
        no-caps
        color="primary"
        :label="props.options?.text?.infoLeftControlText ?? 'Cancel'"
        outline
        @click="emit('cancel')"
      />
      <q-space />
      <q-btn
        no-caps
        color="primary"
        :label="props.options?.text?.infoRightControlText ?? 'Ok'"
        @click="emit('ok')"
      />
    </q-card-actions>
  </q-card>
</template>
