import Projekt from "@/models/projekt";
import projects from '@/data/projekte.json';
import Component from "vue-class-component";
import Vue from "vue";

@Component({
    name: "Projects",
})
export default class Projects extends Vue {
    private loading = true;
    private projects: Projekt[] = projects;

    mounted(): void{
        this.loading = false;
    }
}