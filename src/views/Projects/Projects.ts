import {Component, Vue} from "vue-property-decorator";
import Projekt from "@/models/projekt";
import projects from '@/data/projekte.json';

@Component
export default class Projects extends Vue {
    private loading = true;
    private projects: Projekt[] = projects;

    mounted(): void{
        this.loading = false;
    }
}