<template>
  <v-form
    ref="form"
    v-model="valid"
    class="dialog-input"
  >
    <v-row>
      <v-col class="pb-0">
        <h4>{{ defaultOptions.text.headerDialog }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pb-0">
        <v-text-field
          v-model="name"
          :label="defaultOptions.text.name"
          :rules="nameRules"
          dense
          outlined
          required
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <v-textarea
          v-model="description"
          :label="defaultOptions.text.description"
          :rules="descriptionRules"
          dense
          height="150"
          outlined
          required
          rows="6"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <v-text-field
          v-model="email"
          :label="defaultOptions.text.email"
          :rules="emailRules"
          dense
          outlined
          required
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { VueFeedbackDialogMixin } from '../VueFeedbackDialogMixin'

export default {
  name: 'VueFeedbackDialogInput',
  mixins: [VueFeedbackDialogMixin],
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
  },
  data () {
    return {
      valid: false,
      name: '',
      description: '',
      email: '',
      debounceTimer: null,
      nameRules: [
        v => !!v || this.defaultOptions.text.nameError
      ],
      descriptionRules: [
        v => !!v || this.defaultOptions.text.descriptionError
      ],
      emailRules: [
        v => !!v || this.defaultOptions.text.emailError,
        v => /.+@.+/.test(v) || this.defaultOptions.text.emailError
      ]
    }
  },
  computed: {
    inputValues () {
      return this.name +
      this.description +
      this.email +
      Date.now()
    }
  },
  watch: {
    async inputValues () {
      clearTimeout(this.debounceTimer)
      // delay new call 500ms
      this.debounceTimer = setTimeout(() => {
        if (this.valid) {
          this.$emit('update',
            {
              name: this.name,
              description: this.description,
              path: window.location.href,
              email: this.email
            })
        } else {
          this.$emit('update', null)
        }
      }, 500)
    }
  }
}
</script>

<style scoped>
  .v-text-field--outlined >>> .v-messages__message {
    padding-top: 5px;
    font-size: 14px !important;
  }

</style>