<template>
    <div>
        <header class="common-head">
            <div class="common-head-left" @click="goBack">返回</div>
            <div class="common-head-title">{{titleName}}</div>
            <div class="common-head-right"></div>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'header',
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

