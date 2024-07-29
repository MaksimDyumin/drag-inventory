import type { Component } from "vue";
import { Field } from "../useApi/useApi.types";
interface State {
    component: null | Component;
    isVisible: boolean;
    args: Field | null;
}
export declare const useModalWindowStore: import("pinia").StoreDefinition<"modalWindow", State, {}, {
    showModal(component: Component, args: any): void;
    hideModal(): void;
}>;
export {};
