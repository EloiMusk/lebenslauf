export default class Auszeichnung {
    public name: string;
    public date: string;
    image: string;

    constructor(name: string, date: string, image: string) {
        this.name = name;
        this.date = date;
        this.image = image;
    }
}