import ContentData from "@/types/abstract/ContentData";

export default interface NavigationTab extends ContentData{
    displayText: string;
    iconName: string;
    link: string;
    active: boolean;
}