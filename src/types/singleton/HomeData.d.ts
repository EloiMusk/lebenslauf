import ContentData from "@/types/abstract/ContentData";
import Person from "@/types/collection/Person";
import Interest from "@/types/collection/Interrest";
import Ambition from "@/types/collection/Ambition";


export default interface HomeData  extends ContentData {
    general: {
        title: string;
        person: Person;
    };
    myAmbition: {
        title: string;
        sentenceStart: string;
        ambition: Ambition[];
    };
    myInterests: {
        title: string;
        interests: Interest[];
    };
}
