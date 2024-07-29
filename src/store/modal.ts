import { defineStore } from "pinia"
import type { Component } from "vue"
import { Field } from "../useApi/useApi.types"

interface State {
  component: null | Component,
  isVisible: boolean,
  args: Field | null
}

export const useModalWindowStore = defineStore('modalWindow', {
  state: (): State => ({ 
    component: null,
    isVisible: false,
    args: null
   }),
  actions: {
    showModal(component: Component, args: any ) {
      this.args = args
      this.component = component
      this.isVisible = true
    },
    hideModal() {
      this.isVisible = false
      this.component = null
      this.args = null
    }
  },
})