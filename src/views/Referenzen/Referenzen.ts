import Vue from 'vue';
import Component from "vue-class-component";

@Component({
    name: "Referenzen"
})
export default class Referenzen extends Vue {

    private mail(address: string) {
        window.open("mailto:" + address);
    }

    private call(number: string) {
        window.open("tel:" + number);
    }
}
