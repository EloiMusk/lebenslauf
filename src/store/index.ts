import Vue from 'vue'
import Vuex from 'vuex'
import cockpitService from "@/services/CockpitService";
import NavigationData from "@/types/singleton/NavigationData";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navData: null as NavigationData | null
    },
    mutations: {
        setTabActive(state, payload) {
            if (state.navData !== null)
                state.navData.tabs[payload.index].active = payload.state;
            console.log(state.navData)
        }
    },
    actions: {
        fetchNavData({state}) {
            cockpitService.getSingleton<NavigationData>("mainNav", 1).then((navData: NavigationData | null) => {
                if (navData !== null) {
                    state.navData = navData;
                }
            });
        }
    },
    modules: {

    }
})
