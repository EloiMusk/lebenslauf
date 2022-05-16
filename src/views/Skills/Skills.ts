import {Vue} from "vue-property-decorator";
import skills from '@/data/skills.json';
import Category from '@/models/Category';
import {ApexOptions} from "apexcharts";
import Component from "vue-class-component";
import SkillChart from "@/components/skillChart/SkillChart";


@Component({
    components: {
        skillChart: SkillChart
    }
})
export default class Skills extends Vue {
    private chartData: Array<{ series: ApexAxisChartSeries, chartOptions: ApexOptions }> = [];
    private categories: Category[] = skills;

    private panel = 0;

    beforeMount(): void {
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
                    theme: {
                        mode: 'dark'
                    },
                    chart: {
                        toolbar: {
                            show: false
                        },
                        type: 'radar',
                        dropShadow: {
                            enabled: true,
                            top: 0,
                            left: 0,
                            blur: 5,
                            opacity: 0.8,
                            color: '#000000'
                        },
                        background: 'transparent',
                        animations: {
                            enabled: true,
                            easing: 'easeinout',
                            speed: 300,
                            animateGradually: {
                                enabled: true,
                                delay: 150
                            },
                            dynamicAnimation: {
                                enabled: true,
                                speed: 500
                            }
                        }
                    },
                    title: {
                        style: {
                            fontSize: '20px'
                        }
                    },
                    labels: category.skills.map(skill => skill.name),
                    colors: ['#F44336'],
                    tooltip: {
                        enabled: false
                    },
                    dataLabels: {
                        enabled: true,
                        style: {
                            colors: ['#F44336'],
                            fontSize: '0.9em'
                        }
                    },
                    yaxis: {
                        max: 100,
                        min: 0,
                        labels: {
                            style: {
                                colors: '#F44336',
                                fontSize: '0.9em'
                            }
                        }
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '0.9em'
                            }
                        }
                    }
                }
            }
        });
    }
}


