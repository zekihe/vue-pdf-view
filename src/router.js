import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/home/local',
            component: (resolve) => { require.ensure([], (require) => resolve(require("./views/home/home.vue")),'home') },
            children: [
                {
                    path: '/home/local',
                    name: 'local',
                    component: (resolve) => { require.ensure([], (require) => resolve(require("./views/home/local.vue")),'local') },
                }
            ]
        },
        {
            path: '/server',
            name: 'server',
            component: (resolve) => { require.ensure([], (require) => resolve(require("./views/service/index.vue")),'server') },
            
        }
    ]
})

export default router;