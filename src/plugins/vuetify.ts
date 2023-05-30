import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import logo from '@/components/logo.vue';
import thm from '@/components/thm.vue';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            logo: {
                component: logo
            },
            thm: {
                component: thm
            }
        }
    }
});
