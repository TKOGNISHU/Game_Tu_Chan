<template>
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img style="height: 100vh;" :src="`${HTTP_GG_DRIVE}1SCk8cBdhGsz1wDqJgwBoHm8ov0KgyVVY`" alt="">
        </section>
        <!--  -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10; background-color: #00000050;">
            <a class="mx-2 fs-4 text-info" 
                :href="`${SERVER_URL_LOGIN}/auth/login`">Log in with google</a>
        </section>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE, SERVER_URL_LOGIN } from '#/env'
import { useUserStore } from '@/stores/index'
export default{
    setup() {
        const store = useUserStore()
        return {
            logIn: store.logIn,
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            SERVER_URL_LOGIN,
        }
    }
}
</script>
