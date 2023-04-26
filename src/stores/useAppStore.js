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
        setShowCharacter(e) {
            const btn = e.currentTarget.dataset?.characterBtn || e.currentTarget.dataset?.embattleId
            this.showCharacter = btn
        },
    },
})
