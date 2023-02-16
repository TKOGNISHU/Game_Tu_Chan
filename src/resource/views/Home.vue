<template>
    <!--  :style="`background-image: url('${background}');`" -->
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" src="@/assets/img/hinh-anh-may-tuyet-dep(1).jpg" alt="">
        </section>

        <!--  -->
        <section class="h-100" style="z-index: 10;">
            <router-view name="header-function" />
    
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
import Board from '@/components/board/Board.vue'

export default {
    components: { Board,  },
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
    async created() {
    },
    async mounted() {
    },
}

// async function timeout(ms) {
//     return new Promise((resolve) => {
//         return setTimeout(resolve, ms)
//     })
// }

// async function temp() {

//     const img = $$('img')

//     let i = 0
//     await timeout(1000)
//         .then()
//     for (let e of img) {
//         console.group('\\\\')
//         e.classList.remove('d-none')
//         console.log(`hiện ${i}`)

//         await timeout(50)
//             .then(() => {
//                 if (e != img[3]) {
//                     e.classList.add('d-none')
//                 }
//                 console.log(`ẩn ${i}`)
//                 console.log('timeout')
//             })

//         if (e == img[3]) await timeout(1000)
//             .then(() => {
//                 e.classList.add('d-none')
//                 img[0].classList.remove('d-none')
//             })
//         console.groupEnd()
//     }
//     console.groupEnd()
// }
</script>

<style>
.background {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>
