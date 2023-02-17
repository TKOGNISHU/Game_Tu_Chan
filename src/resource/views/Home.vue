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
            <section class="ms-3 me-5" style="min-width: 300px; max-width: 1000px; min-height: 300px; max-height: 500px;">
                <!-- Header -->
                <section class="text-start">
                    <button @click.prevent="" class="rounded border-0 px-3 py-1 me-1 fw-semibold" style="background-color: #1a8fff6e; color: #05eaff;">Nhân Vật</button>
                    
                    <button @click.prevent="" class="rounded border-0 px-3 py-1 me-1 fw-semibold" style="background-color: #1a8fff6e; color: #05eaff;">Tu Luyện</button>
                    
                    <button @click.prevent="" class="rounded border-0 px-3 py-1 me-1 fw-semibold" style="background-color: #1a8fff6e; color: #05eaff;">Dàn Trận</button>
                    
                </section>

                <!-- Body -->
                <section class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 900px;">
                    <!-- Left -->
                    <section class="col-2 border-end border-1 overflow-auto board-characters" style="height: 200px; border-color: #05beffcc !important;">
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Hạo Thiên
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Hàn Lập
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Tiêu Viêm
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Lăng Cung
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                    </section>
                    <!-- Right -->
                    <section class="col">
                        <div style="height: 100px; width: 46px;">
                            <img class="h-100" src="@/assets/img/nam-tu-si/Immortality-200-chanting-3pic.png" alt="">
                        </div>
                    </section>
                </section>
            </section>
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
