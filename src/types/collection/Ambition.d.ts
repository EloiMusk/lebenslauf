import ContentData from "@/types/abstract/ContentData";

export default interface Ambition extends ContentData{
    text: string;
    category: any[]; // You can replace 'any' with a specific type if available
}