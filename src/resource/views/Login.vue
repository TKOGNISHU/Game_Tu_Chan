<template>
    <a class="mx-2 fs-4 text-info" 
        :href="`${SERVER_URL_LOGIN}/auth/login`">Log in with google</a>
</template>

<script>
import { SERVER_URL_LOGIN } from '../../../env'
export default{
    data() {
        return {
            SERVER_URL_LOGIN,
        }
    }
}
</script>
