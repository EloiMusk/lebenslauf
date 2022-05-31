export default class Projekt {
    name: string;
    description: string;
    image: string;
    pa: string;
    duration: string;
    technologies: string[];
    icon: string;

    constructor(name: string, description: string, image: string, pa: string, duration: string, technologies: string[], icon: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.pa = pa;
        this.duration = duration;
        this.technologies = technologies;
        this.icon = icon;
    }
}