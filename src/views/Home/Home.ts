import moment from 'moment';
import Component from 'vue-class-component';
import Vue from "vue";

@Component({
    name: "Home"
})
export default class Home extends Vue {

    private currentYear(){
        return moment(moment()).diff('05.08.2019', 'years');
    }
}