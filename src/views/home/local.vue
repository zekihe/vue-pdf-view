<template>
    <div class="homepage-main">
        <pdf-reader :urlLink="'/src/assets/demo.pdf'"></pdf-reader>
    </div>
</template>
<script>
    import pdfReader from '../common/pdfReader.vue'
    export default {
        components: {
            pdfReader
        }
    }
</script>

