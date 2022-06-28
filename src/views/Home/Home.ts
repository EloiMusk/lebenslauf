import Component from 'vue-class-component';
import Vue from "vue";

@Component({
    name: "Home"
})
export default class Home extends Vue {

    public get currentYear(): number {
        const startDate: Date = new Date(2019, 7, 2);
        const endDate: Date = new Date();
        const years: number = 1+Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
        return years;
    }
}