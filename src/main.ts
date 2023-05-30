import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    document.title = to.name || "Elio Teuber";
    next()
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
