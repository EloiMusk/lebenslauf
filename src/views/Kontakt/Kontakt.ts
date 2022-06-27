import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "Kontakt",
})
export default class Kontakt extends Vue {
    private call(number: string): void {
        window.open(`tel:${number}`);
    }

    private mail(email: string): void {
        window.open(`mailto:${email}`);
    }

    private link(url: string): void {
        window.open(url);
    }
}