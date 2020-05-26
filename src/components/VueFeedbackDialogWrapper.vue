<template>
  <div
    class="dialog-wrapper"
    :style="[themeStylingBorder, themeStylingBackground]"
    :class="flipped ? 'flip-container flipped': 'flip-container'"
  >
    <v-row>
      <v-col class="dialog-content" cols="12">
        <slot name="dialog-info">
          <VueFeedbackDialogInfo
            :options="options"
            :messages="messages"
          />
        </slot>
        <slot name="dialog-input">
          <VueFeedbackDialogInput
            :options="options"
            :reset="!flipped"
            @update="updateInput"
          />
        </slot>
      </v-col>
      <v-col cols="12">
        <VueFeedbackDialogControls
          :options="options"
          :flipped="flipped"
          :input-valid="input !== null"
          :message-available="!!messages.length"
          @flip="flip"
          @close="$emit('close')"
          @feedback="sendFeedback"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VueFeedbackDialogMixin } from '../VueFeedbackDialogMixin'
import VueFeedbackDialogInput from './VueFeedbackDialogInput'
import VueFeedbackDialogControls from './VueFeedbackDialogControls'
import VueFeedbackDialogInfo from './VueFeedbackDialogInfo'

export default {
  name: 'VueFeedbackDialogWrapper',
  components: {
    VueFeedbackDialogInput,
    VueFeedbackDialogControls,
    VueFeedbackDialogInfo
  },
  mixins: [VueFeedbackDialogMixin],
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    messages: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      flipped: false,
      input: null
    }
  },
  mounted () {
    // No messages, give user input dialog
    if (!this.messages.length) {
      this.flipped = true
    }
  },
  methods: {
    async sendFeedback () {
      if (this.input) {
        this.$emit('feedback', this.input)
        /* Reset form and close with a spinn */
        this.flipped = false
        this.$emit('close')
      }
    },
    // Flip info/input
    flip (value) {
      this.flipped = value
    },
    updateInput (value) {
      this.input = value
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  position: fixed;
  z-index: 9999;
  width: 85%;
  max-width: 28rem;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  bottom: 5.75rem;
  right: 1.5rem;
  border-radius: 5px;
}

.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
  min-height: 28rem;
}

.dialog-info,
.dialog-input {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  width: 100%;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 10px;
  top: 0;
  left: 0;
}

.dialog-content {
  height: 24rem;
  overflow-y: auto;
}

.dialog-input {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .dialog-input {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .dialog-info {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.dialog-info {
  z-index: 2;
}
</style>
