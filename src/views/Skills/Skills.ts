import {Vue} from "vue-property-decorator";
import skills from '@/data/skills.json';
import Category from '@/models/Category';
import Component from "vue-class-component";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);


@Component({
    components: {}
})
export default class Skills extends Vue {
    private chartData: Array<any> = [];
    private categories: Category[] = skills;
    private charts: Array<Chart> = [];
    private headerCharts: Array<Chart> = [];

    private panel = 0;

    beforeMount(): void {
        this.mapChartData();
    }

    mounted(): void {
        console.log("Ref: ", this.$refs)
        this.charts = this.chartData.map((data, i) => {
            return new Chart(this.$refs.chart[i].getContext('2d'), data);
        });
    }

    private getStyle(skill: number, collection: Array<number>, index: number) {
        const colSum = collection.reduce((a, b) => a + b, 0);
        const width = 100 / colSum * skill;
        const background = 'hsl(' + 330 / collection.length * index + ',83.6%, 66%, 20%)';
        return {
            width: `${width}%`,
            background: background
        }
    }

    // private getSorted(collection: Array<number>){
    //     return collection.sort((a, b) => a - b);
    // }


    private mapChartData() {
        this.chartData = this.categories.map(category => {
            return {
                type: 'polarArea',
                data: {
                    labels: category.skills.map(skill => skill.name),
                    datasets: [
                        {
                            label: category.name,
                            data: category.skills.map(skill => skill.level),
                            fill: true,
                            backgroundColor: category.skills.map(
                                (skill, i, a) => 'hsl(' + 330 / a.length * i + ',83.6%, 66%, 20%)'
                            ),
                            borderColor: category.skills.map(
                                (skill, i, a) => 'hsl(' + 330 / a.length * i + ',100%, 66%)'
                            ),
                            pointBackgroundColor: 'rgb(54, 162, 235)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(54, 162, 235)'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    transitions: {
                        easing: 'easeInOutQuad'
                    }

                },
                scales: {
                    yAxes: [{
                        min: 0,
                        max: 100,
                    }]
                },

            label: category.name
        }
    }

);
}
}



