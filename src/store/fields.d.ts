import { Fields } from "../useApi/useApi.types";
interface State {
    fields: Fields;
}
export declare const useFieldsStore: import("pinia").StoreDefinition<"fieldsStore", State, {}, {
    showModal(): void;
    hideModal(): void;
}>;
export {};
