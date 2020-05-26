<template>
  <div class="dialog-info">
    <v-row>
      <v-col class="pt-0 pb-0">
        <h4>
          {{ defaultOptions.text.headerInfo }} ({{ messages.length }})
        </h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
          <ul
            class="dialog-info-message-list"
            v-for="(message, i) in messages"
            :key="i"
          >
            <li>
              <h5>{{ message.header }}</h5>
              <p class="ma-0"> {{ message.info }} </p>
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VueFeedbackDialogMixin } from '@/VueFeedbackDialogMixin'

export default {
  name: 'VueFeedbackDialogInfo',
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
  }
}
</script>

<style lang="scss" scoped>
  .dialog-info-message-list {
    list-style-type: none;
    padding-left: 0 !important;
    padding-top: 10px;
  }
</style>