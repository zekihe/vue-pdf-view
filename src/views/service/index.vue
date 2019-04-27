<template>
    <div style="height: 100%">
        <commonHeader :titleName="'PDF-服务器'"></commonHeader>
        <router-view></router-view>
        <commonFooter></commonFooter>
    </div>   
</template>
<script>
    import commonHeader from '../common/commonHeader.vue'
    import commonFooter from '../common/footer.vue'
    export default {
        components: {
            commonHeader,
            commonFooter
        },
        data(){
            return {}
        }
    }
</script>
