import {Component, Vue} from "vue-property-decorator";
import skills from '@/data/skills.json';
import Category from '@/models/Category';
import VueApexCharts from "vue-apexcharts";

interface chartData {
    series: [{
        name: string,
        data: number[]
    }],
    chartOptions: {
        chart: {
            height: number,
            type: string
        },
        title: {
            text: string
        },
        xAxis: {
            categories: string[]
        }
    }
}

@Component({
    components: {
        apexchart: VueApexCharts
    }
})
export default class Skills extends Vue {
    private chartData: Array<chartData> = [];
    private categories: Category[] = skills;

    mounted(): void {
        this.mapChartData();
    }

    private mapChartData() {
        this.chartData = this.categories.map(category => {
            return {
                series: [{
                    name: category.name,
                    data: category.skills.map(skill => skill.level)
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'radar'
                    },
                    title: {
                        text: category.name
                    },
                    xAxis: {
                        categories: category.skills.map(skill => skill.name)
                    }
                }
            }
        });
        console.log(JSON.stringify(this.categories));
        console.log(this.chartData);
    }
}