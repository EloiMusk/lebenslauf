import ContentData from "@/types/abstract/ContentData";
import {Image} from "@/types/abstract/Asset";

interface SocialLink extends ContentData{
    logo: Image | null;
    name: string;
    link: string;
    linkText: string | null;
}

interface Contact extends ContentData{
    email: string;
    mobile: string;
    socials: SocialLink[];
}

export default interface Person extends ContentData{
    portrait: Image;
    name: string;
    profession: string;
    birthday: Date;
    contact: Contact;
}

export {SocialLink, Contact}