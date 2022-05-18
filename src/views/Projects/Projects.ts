import {Component, Vue} from "vue-property-decorator";

@Component
export default class Projects extends Vue {
    private loading = true;

    mounted(): void{
        this.loading = false;
    }

}