import { fieldsGenerator } from "../useApi/fieldsGenerator"
import { Fields } from "../useApi/useApi.types"
import { defineStore } from "pinia"

interface State {
  fields: Fields,
}

export const useFieldsStore = defineStore('fieldsStore', {
  state: (): State => ({
    fields: fieldsGenerator(),
  }),

  actions: {
    showModal() {

    },
    hideModal() {

    }
  },
})