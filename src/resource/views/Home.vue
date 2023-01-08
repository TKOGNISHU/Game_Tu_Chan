<template>
    <!--  :style="`background-image: url('${background}');`" -->
    <div class="h-100 text-center background">
        <div class="position-relative d-inline-block">
            <img class="" style="height: 100vh;" src="@/assets/img/hinh-anh-may-tuyet-dep.jpg" alt="">
    
            <router-link class="position-absolute d-inline-flex flex-column align-items-center text-decoration-none" style="bottom: 5%; right: 5%;" to="">
                <img class="d-block object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
                <p class="text-light fs-6">Du ngoạn</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import background from '@/assets/img/hinh-anh-may-tuyet-dep.jpg'
export default {
    data() {
        return {

        }
    },
    computed: {
        background() {
            return background
        }
    },
    async created() {
    },
    async mounted() {
        // const background = $('.background')
        // const width = $('body').offsetWidth
        // const height = $('body').offsetHeight

        // background.style.width = width
        // background.style.height = height
    },
}

async function timeout(ms) {
    return new Promise((resolve) => {
        return setTimeout(resolve, ms)
    })
}

async function temp() {

    const img = $$('img')

    let i = 0
    await timeout(1000)
        .then()
    for (let e of img) {
        console.group('\\\\')
        e.classList.remove('d-none')
        console.log(`hiện ${i}`)

        await timeout(50)
            .then(() => {
                if (e != img[3]) {
                    e.classList.add('d-none')
                }
                console.log(`ẩn ${i}`)
                console.log('timeout')
            })

        if (e == img[3]) await timeout(1000)
            .then(() => {
                e.classList.add('d-none')
                img[0].classList.remove('d-none')
            })
        console.groupEnd()
    }
    console.groupEnd()
}
</script>

<style>
.background {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>
