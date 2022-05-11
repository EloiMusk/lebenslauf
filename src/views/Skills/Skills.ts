import {Component, Vue} from "vue-property-decorator";
import skills from '@/data/skills.json';

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

interface category {
    name: string,
    skills: skill[]
}

interface skill {
    name: string,
    value: number
}

@Component({
    components: {}
})
export default class Skills extends Vue {
    private chartData: Array<chartData> = [];
    private categories: category[] = skills.skills.map(category => {
        return { name: category.category, skills: Object.values(category.values).map( value => {
            return { name: value.name, value: value.value };
            }) };
    });

    mounted() {
        this.mapChartData();
    }

    private mapChartData() {
        this.chartData = this.categories.map(category => {
            return {
                series: [{
                    name: category.name,
                    data: category.skills.map(skill => skill.value)
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
    }
}