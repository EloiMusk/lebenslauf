import Vue from 'vue';
import Component from "vue-class-component";
import Referenz from "@/models/Referenz";
import referenzen from "@/data/referenzen.json";

@Component({
    name: "Referenzen"
})
export default class Referenzen extends Vue {

    referenzen: Referenz[] = referenzen

    private mail(address: string) {
        window.open("mailto:" + address);
    }
}
