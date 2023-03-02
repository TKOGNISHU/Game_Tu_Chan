<template>
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" src="@/assets/img/afab533e-ed85-46ff-bbc9-9f356d94f99b-result (2).png" alt="">
        </section>

        <!--  -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10;">
            <!-- Header -->
            <router-view name="header-function" />

            <!-- Body -->
            <router-link class="d-inline-block" style="height: 100px;" to="/quest/abc/a/fight">
                <img class="h-100" src="@/assets/img/nam-tu-si/nam_tu_si_no_background.png" alt="">
            </router-link>
    
            <!-- Bottom -->
            <router-view @actionBoard="actionBoard" :isBoardShow="isShow" name="bottom-function" />
        </section>

        <Board :isShow="isShow" @closeStatus="closeStatus">
            <div>
                <h2 style="width: 700px; height: 550px;">Hahahhah</h2>
            </div>
        </Board>
    </section>
</template>

<script>
import { Board } from '@/util/components.js'

export default {
    components: { Board, },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        closeStatus() {
            this.isShow = false
        },
        actionBoard() {
            this.isShow = true
        }
    },
}
</script>
