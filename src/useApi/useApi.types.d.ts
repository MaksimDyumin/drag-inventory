export type Field = {
    id: number;
    typeItem: ItemTypes;
    quantity: number;
};
export declare enum ItemTypes {
    green = "-green",
    yellow = "-yellow",
    purple = "-purple",
    withoutItem = ""
}
export type Fields = Array<Field>;
