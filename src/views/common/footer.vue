<template>
    <section class="common-foot">
        <ul>
            <li v-for="(item,index) in navArr"
                :key="index"
                @click="toggle(item.name)"
                :class="{active: pathName == item.name}">
                <span>{{item.desc}}</span>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        name: 'commonfooter',
        props: {},
        data() {
            return {
                pathName: this.$route.name,
                navArr: [
                    {name: 'local', desc: '本地'},
                    {name: 'server', desc: '服务器'}
                ]
            }
        },
        created (){

        },
        methods: {
            toggle(typeName){
                this.$router.push({
                    name: typeName
                })
            }
        }
    }
</script>

