<template>
    <section class="position-absolute bottom-0 end-0" style="z-index: 100;">
        <router-link @click.prevent="actionBoard('embattle')" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/embattle.png" alt="">
            <p class="text-light fs-6">Trận đồ</p>
        </router-link>

        <router-link @click.prevent="actionBoard('bag')" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/bag.png" alt="">
            <p class="text-light fs-6">Túi đồ</p>
        </router-link>

        <router-link @click.prevent="actionBoard('train')" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/book.png" alt="">
            <p class="text-light fs-6">Tu luyện</p>
        </router-link>

        <router-link v-if="this.$route.path == '/'" class="d-inline-flex flex-column align-items-center text-decoration-none" :to="{name: 'quest', params: { idQuest: 'a' }}">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/sword.png" alt="">
            <p class="text-light fs-6">Phó bản</p>
        </router-link>
        <router-link v-else class="d-inline-flex flex-column align-items-center text-decoration-none" :to="{name: 'home'}">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
            <p class="text-light fs-6">Về Tông</p>
        </router-link>
    </section>
</template>

<script>
export default {
    props: {
        isBoardShow: { type: Boolean, default: false },
    },
    methods: {
        actionBoard(type) {
            switch (type) {
                case 'train':
                    this.$emit('train', type)
                    break
                case 'bag':
                    this.$emit('bag', type)
                    break
                case 'embattle':
                    this.$emit('embattle', type)
                    break
            }
        },
    }
}
</script>
