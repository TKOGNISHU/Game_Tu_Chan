<template>
    <img class="d-none" src="@/assets/img/nam_tu_si_no_background.png" alt="">
    <img class="d-none" src="@/assets/img/nam_tu_si_thi_phap_second.png" alt="">
    <img class="d-none" src="@/assets/img/nam_tu_si_no_background_between.png" alt="">
    <img class="d-none" src="@/assets/img/nam_tu_si_thi_phap_finaly.png" alt="">
</template>

<script>
export default {
    data() {
        return {

        }
    },
    async mounted() {
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
        // while(i < 10) {
        //     console.group(`lần ${i}`)

        //     await timeout(1000).then()

        //     i++
        // }

    },
}

async function timeout(ms) {
    return new Promise((resolve) => {
        return setTimeout(resolve, ms)
    })
} 
</script>
