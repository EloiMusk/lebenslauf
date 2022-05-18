import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import logo from '@/components/logo.vue';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            logo: {
                component: logo
            }
        }
    }
});
