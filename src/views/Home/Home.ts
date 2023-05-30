import Component from 'vue-class-component';
import Vue from "vue";
import cockpitService from "@/services/CockpitService";
import HomeData from "@/types/singleton/HomeData";
import DateTimeFormat = Intl.DateTimeFormat;
import {imageBuilder} from "@/services/ImageService";

@Component({
    name: "Home",
    methods: {imageBuilder},
    computed: {
        DateTimeFormat() {
            return DateTimeFormat
        }
    }
})
export default class Home extends Vue {
    public homeData: HomeData | null = null;

    public get currentYear(): number {
        const startDate: Date = new Date(2019, 7, 2);
        const endDate: Date = new Date();
        const years: number = 1 + Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
        return years;
    }

    created(): void {
        cockpitService.getSingleton<HomeData>("home", 1).then((homeData: HomeData | null) => {
            if (homeData !== null) {
                this.homeData = homeData;
            }
        });
    }
}