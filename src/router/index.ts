import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Skills from '@/views/Skills/Skills.vue'
import Projects from '@/views/Projects/Projects.vue'
import Referenzen from '@/views/Referenzen/Referenzen.vue'
import Kontakt from "@/views/Kontakt/Kontakt.vue";
import Auszeichnungen from "@/views/Auszeichnungen/Auszeichnungen.vue";

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
    },
    {
        path: '/projekte',
        name: 'Projekte',
        component: Projects
    },
    {
        path: '/referenzen',
        name: 'Referenzen',
        component: Referenzen
    },
    {
        path: '/kontakt',
        name: 'Kontakt',
        component: Kontakt
    },
    {
        path: '/auszeichnungen',
        name: 'Auszeichnungen',
        component: Auszeichnungen
    }
]

const router = new VueRouter({
    routes
})

export default router
