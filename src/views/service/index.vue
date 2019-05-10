<template>
    <div style="height: 100%">
        <commonHeader :titleName="'PDF-服务器'"></commonHeader>
        <!-- <router-view></router-view> -->
        <iframe :src="openUrl" frameborder="0" width="100%" height="100%"></iframe>
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
            return {
                openUrl: '/static/pdf/web/viewer.html?file=http://image.cache.timepack.cn/nodejs.pdf',
            }
        },
        created(){
            // let url = 'http://image.cache.timepack.cn/nodejs.pdf'  // 有效 服务器配置跨域处理
            //     window.open('/static/pdf/web/viewer.html?file=' + url)
        }
    }
</script>
