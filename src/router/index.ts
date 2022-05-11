import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Skills from "@/views/Skills/Skills.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    }
]

const router = new VueRouter({
    routes
})

export default router
