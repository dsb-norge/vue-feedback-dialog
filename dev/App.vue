<template>
  <div id="app">
    <VueFeedbackDialog
      :messages="messages"
      :options="options"
    />
  </div>
</template>

<script>
import VueFeedbackDialog from '../src/components/VueFeedbackDialog.vue'
export default {
  name: 'App',
  components: {
    VueFeedbackDialog
  },
  data () {
    return {
      messages: [
        {
          header: 'Maintenance 23.02.20',
          info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don ook even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there ist anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
        },
        {
          header: 'Down time 10.05.20',
          info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
        }
      ],
      options: {
        text: {
          headerInfo: 'Driftsinformasjon: ',
          headerDialog: 'Send inn forslag eller feilmelding: ',
          dialogLeftControlText: 'Tilbake',
          infoLeftControlText: 'Lukk',
          dialogRightControlText: 'Send',
          infoRightControlText: 'Rapporter feil',
          defaultMessage: 'Ingen nye meldinger',
          name: 'Navn',
          nameError: 'Dette feltet er påkrevd',
          description: 'Beskrivelse...',
          descriptionError: 'Dette feltet er påkrevd',
          email: 'Epost',
          emailError: 'Ugyldig epost'
        },
        layout: {
          color: '#e25923',
          border: '#e25923',
          backgroundColor: 'white'
        }
      }
    }
  }
}
</script>