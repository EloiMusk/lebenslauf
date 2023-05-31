import Vue from 'vue';
import Component from "vue-class-component";
import NavigationData from "@/types/singleton/NavigationData";
@Component({
    name: "App"
})
export default class App extends Vue {

    get navData(): NavigationData | null {
        return this.$store.state.navData;
    }

    toggleTab = (index: number, state: boolean) => {
        this.$store.commit('setTabActive', {index, state});
    }

    created(): void {
        this.$store.dispatch('fetchNavData');
    }

    mounted(): void {
        if ((window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('mode')) || localStorage.getItem('mode') === 'dark') {
            this.$vuetify.theme.dark = true;
            localStorage.setItem('mode', 'dark');
        } else if (localStorage.getItem('mode') == 'light') {
            this.$vuetify.theme.dark = false;
        }
    }

    updated(): void {
        if (this.$vuetify.theme.dark) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'light');
        }
    }
}