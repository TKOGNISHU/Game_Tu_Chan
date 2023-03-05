import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        showCharacter: 0,
    }),
    getters: {
        getShowCharacter() {
            return this.showCharacter
        },
    },
    actions: {
        setShowCharacter(value) {
            this.showCharacter = value
        },
    },
})
