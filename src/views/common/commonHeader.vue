<template>
    <section class="common-head">
        <div class="common-head-left" @click="goBack">Back</div>
        <div class="common-head-title">{{titleName}}</div>
        <div class="common-head-right"></div>
    </section>
</template>
<script>
    export default {
        name: 'commonheader',
        props: {
            titleName: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

