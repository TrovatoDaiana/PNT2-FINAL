import { defineStore } from "pinia"

export const useGlobalStore = defineStore('global', {
    state: () => ({ contador: 321 }),
    getters: {
        getContador: state => state.contador
    },
    actions: {
        incrementarContador(paso) {
            this.contador += paso
        }
    }
})