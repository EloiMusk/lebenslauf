import {Prop, Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import {ApexOptions} from "apexcharts";
import VueApexCharts from "vue-apexcharts";


@Component({
    components: {
        apexchart: VueApexCharts
    }
})
export default class SkillChart extends Vue{
@Prop() private chartOptions: ApexOptions | undefined;
@Prop() private series: ApexAxisChartSeries | undefined;
@Prop() private i: number | undefined;
mounted(): void {
    console.log('mounted');
}

}