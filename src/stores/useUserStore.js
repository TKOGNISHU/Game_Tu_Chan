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
            console.log("store > isAdmin: ", this.user)
            if (this.user) {
                return this.user.role == 'admin'
            }
            return false
        },
        getUser() {
            console.log("store > getUser: ", this.user)
            if (this.user) {
                return this.user
            }
            return false
        },
    },
    actions: {
        async logIn(_this) {
            try {
                console.log("store > Log in...")
                this.user = await UserService.get()
                if (!this.getUser) {
                    return _this.$router.push({ name: 'login' })
                }
                console.log("store > user: ", this.user)
            } catch(e) {
                console.log(e)
                _this.$router.push({ name: 'login' })
            }
        },
        logOut() {
            this.user = undefined
        },
    }
}) 
