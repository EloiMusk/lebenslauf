import Skill from "@/models/Skill";

export default class Category {
    name: string;
    skills: Skill[];
    constructor(name: string, skills: Skill[]) {
        this.name = name;
        this.skills = skills;
    }
}