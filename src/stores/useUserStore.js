import { defineStore } from "pinia"

import AuthService from "@/services/auth.service"
import UserService from "@/services/user.service"

export const useUserStore = defineStore('user', {
    state: () => ({
        user: undefined,
    }),
    getters: {
        isLoggedIn() {
            if (this.user) {
                return true
            }
            return false
        },
        isAdmin() {
            console.log(this.user)
            if (this.user) {
                return this.user.role == 'admin'
            }
            return false
        },
        getUser() {
            console.log(this.user)
            if (this.user) {
                return this.user
            }
            return false
        },
    },
    actions: {
        async logIn() {
            console.log("Log in...")
            this.user = await UserService.get()
            console.log("user: ", this.user)
        },
        logOut() {
            this.user = undefined
        },
    }
}) 
