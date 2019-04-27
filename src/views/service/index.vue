<template>
    <div style="height: 100%">
        <Header :titleName="'PDF-服务器'"></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>   
</template>
<script>
    import Header from '../common/header.vue'
    import Footer from '../common/footer.vue'
    export default {
        components: {
            Header,
            Footer
        },
        data(){
            return {}
        }
    }
</script>
