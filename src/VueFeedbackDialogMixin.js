export const VueFeedbackDialogMixin = {
    data () {
      return {
        defaultOptions: {
          text: {
            headerInfo: 'Information: ',
            headerDialog: 'Report error or suggestion: ',
            dialogLeftControlText: 'Back',
            infoLeftControlText: 'Close',
            dialogRightControlText: 'Send',
            infoRightControlText: 'Report bug',
            name: 'Name',
            nameError: 'This field is required',
            description: 'Description...',
            descriptionError: 'This field is required',
            email: 'Email',
            emailError: 'Invalid email address'
          },
          layout: {
            color: '#34495e',
            border: '#34495e',
            background: '#FFF'
          }
        }
      }
    },
    mounted () {
      if (this.options !== null && this.options !== undefined) {
        this.mergeDefaultOptionsWithProp(this.options)
      }
    },
    computed: {
      themeStylingBorder () {
        return {
          border: 'solid ' + this.defaultOptions.layout.border + ' 2px'
        }
      },
      themeStylingColor () {
        return {
          color: this.defaultOptions.layout.color
        }
      },
      themeStylingBackground () {
        return {
          background: this.defaultOptions.layout.background
        }
      },
      primaryBtn () {
        return {
          background: this.defaultOptions.layout.color,
          color: this.defaultOptions.layout.background
        }
      },
      secondaryBtn () {
        return {
          color: this.defaultOptions.layout.color,
          background: this.defaultOptions.layout.background
        }
      }
    },
    methods: {
      mergeDefaultOptionsWithProp: function (options) {
        var result = this.defaultOptions
        for (var option in options) {
          if (options[option] !== null && typeof (options[option]) === 'object') {
            for (var subOption in options[option]) {
              if (options[option][subOption] !== undefined && options[option][subOption] !== null) {
                result[option][subOption] = options[option][subOption]
              }
            }
          } else {
            result[option] = options[option]
          }
        }
      }
    },
    watch: {
      options: function (val) {
        if (val !== null && val !== undefined) {
          this.mergeDefaultOptionsWithProp(val)
        }
      }
    }
  }
  