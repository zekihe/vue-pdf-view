<template>
    <div>
        <commonHeader :titleName="'PDF-本地'"></commonHeader>
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
