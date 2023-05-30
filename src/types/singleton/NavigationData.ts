import ContentData from "@/types/abstract/ContentData";
import {Image} from "@/types/abstract/Asset";
import NavigationTab from "@/types/collection/NavigationTab";

export default interface NavigationData extends ContentData{
    logo: Image;
    tabs: NavigationTab[];
}