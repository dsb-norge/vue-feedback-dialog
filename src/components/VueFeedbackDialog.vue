<template>
  <div
    :style="[themeStylingBorder, themeStylingBackground]"
    class="feedback-icon-wrapper"
  >
    <div
      :style="themeStylingColor"
      class="icon"
      @click="[dialogOpen = !dialogOpen, read = true]"
    >
      <component
        :is="dialogOpen ? 'VueFeedbackDialogCloseIcon' : 'VueFeedbackDialogOpenIcon'"
        :color="defaultOptions.layout.color"
      />
    </div>
    <span
      v-show="!read"
      :style="[themeStylingBorder, themeStylingColor, themeStylingBackground]"
      class="notification"
    >
      {{ messages.length }}
    </span>
    <transition name="dialog">
      <VueFeedbackDialogWrapper
        v-show="dialogOpen"
        :options="options"
        :messages="messages"
        @close="dialogOpen = false"
        @feedback="sendFeedback"
      />
    </transition>
  </div>
</template>

<script>
import { VueFeedbackDialogMixin } from '../VueFeedbackDialogMixin'
import VueFeedbackDialogWrapper from './VueFeedbackDialogWrapper'
import VueFeedbackDialogOpenIcon from './VueFeedbackDialogOpenIcon'
import VueFeedbackDialogCloseIcon from './VueFeedbackDialogCloseIcon'

export default {
  name: 'VueFeedbackDialog',
  components: {
    VueFeedbackDialogWrapper,
    VueFeedbackDialogOpenIcon,
    VueFeedbackDialogCloseIcon
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
      dialogOpen: false,
      read: false
    }
  },
  methods: {
    sendFeedback (value) {
      this.$emit('feedback', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback-icon-wrapper {
  position: fixed;
  z-index: 9999;
  bottom: 1rem;
  right: 1.5rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}

.feedback-icon-wrapper .icon {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  width: 3.75rem;
  height: 3.75rem;
}

.feedback-icon-wrapper .icon:hover {
  cursor: pointer;
}

.feedback-icon-wrapper .notification {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0px 7px;
  border-radius: 50%;
  font-weight: bold;
}

.dialog-enter-active, .dialog-leave-active {
  transition: opacity .5s;
}
.dialog-enter, .dialog-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
