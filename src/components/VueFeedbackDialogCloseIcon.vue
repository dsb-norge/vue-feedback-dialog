<!-- mdi close icon -->
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" :fill="color">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
</template>

<script>
export default {
    name: 'VueFeedbackDialogCloseIcon',
    props: {
        color: {
            type: String,
            required: false,
            default: 'black'
        }
    }
}
</script>
