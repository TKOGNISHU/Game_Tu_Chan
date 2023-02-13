<template>
    <!--  :style="`background-image: url('${background}');`" -->
    <section class="h-100 text-center background">
        <router-view name="header-function" />

        
        <Board :isShow="isShow" @closeStatus="closeStatus">
            <div>
                <h2 style="width: 600px; height: 400px;">Hahahhah</h2>
            </div>
        </Board>

        <router-view name="bottom-function" />
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
        }
    },
    async created() {
    },
    async mounted() {
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
