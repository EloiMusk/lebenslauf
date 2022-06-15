import Auszeichnung from "@/models/Auszeichnung";
import Badge from "@/models/Badge";

export default class Platform {
    public name: string;
    public description: string;
    public url: string;
    public auszeichnungen: Auszeichnung[] | undefined;
    public badges: Badge[] | undefined;

    constructor(name: string, description: string, url: string, auszeichnungen?: Auszeichnung[] , badges?: Badge[]) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.auszeichnungen = auszeichnungen;
        this.badges = badges;
    }

}