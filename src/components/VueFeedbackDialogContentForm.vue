<script setup lang="ts">
import { VueFeedbackDialogPluginOptions } from '../interfaces/VueFeedbackDialogPluginOptions.ts'
import { onMounted, reactive } from 'vue'
import { VueFeedbackPayload } from '../interfaces/VueFeedbackPayload.ts'

const props = defineProps<{
  options?: VueFeedbackDialogPluginOptions
}>()

const emit = defineEmits<{
  (event: 'cancel'): void
  (event: 'submit', value: VueFeedbackPayload): void
}>()

const payload = reactive<VueFeedbackPayload>({
  reporter: '',
  description: '',
  email: ''
})

const reporterRules = [
  (v?: string) => !!v || (props.options?.text?.reporterError ?? 'Dette feltet er påkrevd')
]

const descriptionRules = [
  (v?: string) => !!v || (props.options?.text?.descriptionError ?? 'Dette feltet er påkrevd')
]

const emailRules = [
  (v?: string) => !!v || (props.options?.text?.emailError ?? 'Dette feltet er påkrevd'),
  (v?: string) => /.+@.+\..+/.test(v ?? '') || (props.options?.text?.emailError ?? 'Eposten er ikke gyldig')
]

function onSubmit () {
  emit('submit', payload)
}

onMounted(() => {
  if (!!props.options?.initialFormValues) {
    const initValues = props.options.initialFormValues()
    payload.reporter = initValues.reporter
    payload.description = initValues.description
    payload.email = initValues.email
  }
})
</script>

<template>
  <q-form
    greedy
    @submit="onSubmit"
  >
    <q-card-section>
      <h2>{{ props.options?.text?.headerDialog }}</h2>
    </q-card-section>

    <q-card-section>
      <q-input
        v-model="payload.reporter"
        class="q-mb-sm"
        :label="props.options?.text?.reporter"
        outlined
        :rules="reporterRules"
        lazy-rules
      />
      <q-input
        v-model="payload.description"
        class="q-mb-sm"
        :label="props.options?.text?.description"
        type="textarea"
        outlined
        :rules="descriptionRules"
        lazy-rules
      />
      <q-input
        v-model="payload.email"
        :label="props.options?.text?.email"
        outlined
        :rules="emailRules"
        lazy-rules
      />
    </q-card-section>

    <q-card-actions>
      <q-btn
        no-caps
        color="primary"
        :label="props.options?.text?.dialogLeftControlText ?? 'Cancel'"
        outline
        @click="emit('cancel')"
      />
      <q-space />
      <q-btn
        no-caps
        color="primary"
        :label="props.options?.text?.dialogRightControlText ?? 'Ok'"
        type="submit"
        icon-right="mdi-send"
      />
    </q-card-actions>
  </q-form>
</template>
