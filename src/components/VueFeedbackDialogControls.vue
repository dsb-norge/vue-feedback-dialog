<template>
  <v-row class="pa-0">
    <v-col
      class="pt-1 pb-1 btn"
      cols="6"
      style="text-align: center"
    >
      <v-btn
        :style="secondaryBtn"
        @click="flipped ? messageAvailable ? $emit('flipp', false) : $emit('close') : $emit('close')"
      >
        {{ flipped ? defaultOptions.text.dialogLeftControlText : defaultOptions.text.infoLeftControlText }}
      </v-btn>
    </v-col>
    <v-col
      class="pt-1 pb-1"
      cols="6"
      style="text-align: center"
    >
      <v-btn
        :style="primaryBtn"
        :disabled="!inputValid && flipped"
        @click="flipped ? $emit('feedback') : $emit('flipp', true) "
      >
        {{ flipped ? defaultOptions.text.dialogRightControlText : defaultOptions.text.infoRightControlText }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { VueFeedbackDialogMixin } from '../VueFeedbackDialogMixin'

export default {
  name: 'VueFeedbackDialogControls',
  mixins: [VueFeedbackDialogMixin],
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    /*
      Is input form from user valid, disable "send feedback" if invalid form
    */
    inputValid: {
      type: Boolean,
      required: true
    },
    /*
      flipped = Dialog input form
      !flipped = Info text
    */
    flipped: {
      type: Boolean,
      required: true
    },
    /* Is there any messages available for user */
    messageAvailable: {
      type: Boolean,
      required: true
    }
  }
}
</script>
