import { Vue } from 'vue-property-decorator';
import moment from 'moment';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {

    private currentYear(){
        return moment(moment()).diff('05.08.2019', 'years');
    }
}