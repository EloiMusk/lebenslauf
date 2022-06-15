import Vue from "vue";
import Component from "vue-class-component";
import platforms from "@/data/platforms.json";
import Platform from "@/models/Platform";

@Component({
    name: "Auszeichnungen"
})
export default class Auszeichnungen extends Vue {
    platforms: Platform[] = platforms;
    tabs = null;

    openInNewWindow(url: string): void {
        window.open(url, '_blank')?.focus()
    }
}