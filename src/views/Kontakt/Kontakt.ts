import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Kontakt extends Vue {
    private call(number: string): void {
        window.open(`tel:${number}`);
    }

    private mail(email: string): void {
        window.open(`mailto:${email}`);
    }
}