<template>
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" :src="`${HTTP_GG_DRIVE}19TdJQWky4C7z0HTs1OYTTBeryGyCcPkN`" alt="">
        </section>

        <!-- Content -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10;">
            <!-- Header -->
            <router-view name="header-function" />

            <!-- Body -->
            <div v-for="(i, index) of locations" :key="`world-${index}`" class="row" style="margin-top: 100px;">
                <div v-for="(j, indexJ) of i" :key="`world-col-${indexJ}`" class="col" style="height: 62px;">
                    <router-link
                        v-if="locations[index][indexJ] != 0"
                        @click.prevent="actionBoard" :data-point="points[locations[index][indexJ] - 1].i"
                        class="position-absolute d-inline-block text-decoration-none text-light" :to="{ name: 'world', query: { page: page } }"
                    >
                        <img
                            class="" style="height: 52px; width: 92px;"
                            :src="`${HTTP_GG_DRIVE}1A1s6d1GPoz9Yj7R63aS1ZoPDkYQvr6PC`" alt=""
                        >
                        <p class="">{{ listUser[Number.parseInt(points[locations[index][indexJ] - 1].i)]?.name }}</p>
                    </router-link>
                </div>
            </div>

            <!-- Bottom -->
            <router-view name="bottom-function" />
        </section>


        <Board v-if="listUser.length > 0" :isShow="isShowStatusUser" index="world-status" @closeStatus="closeStatus">
            <!-- Header -->
            <section class="mx-3 border-bottom border-2" style="border-color: #97d4f1 !important;">
                <h2 class="fs-5">{{ listUser && listUser[indexUserDisplay]?.name }}</h2>
            </section>
            <!-- Body -->
            <section class="row mt-2 ms-1" style="width: 700px; height: 300px;">
                <div class="col-9">
                    <table class="w-100">
                        <tbody>
                            <tr class="row g-0 border-bottom border-1">
                                <th class="border-end border-1 col-4 fs-6">Tu vi</th>
                                <td class="col fs-6">
                                    <span class="fw-semibold">{{ listUser && listUser[indexUserDisplay]?.maxLevel?.name }}</span>
                                    <span class="ms-1 fw-semibold">{{ listUser && listUser[indexUserDisplay]?.maxLevel?.level }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col mb-4 border-start border-2">
                    <router-link v-if="store.user._id != listUser[indexUserDisplay]?._id" class="mt-4 d-inline-block text-decoration-none fs-6 fw-semibold px-2 py-1 rounded"
                        style="background-color: #c70000a0; color: #e1e1e1d6;"
                        :to="{name: 'fight-player', params: {idPlayer: `${listUser[indexUserDisplay]?._id}`}}"
                    >Tấn Công</router-link>
                </div>
            </section>
        </Board>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE, } from '#/env'
import { useUserStore, } from '#/src/stores'
import { UserService, } from '#/src/services'
import { Board, } from '#/src/components'

export default {
    components: { Board, },
    setup() {
        const store = useUserStore()
        return {
            store,
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            isShowStatusUser: false,
            listUser: [],
            page: 1,
            locations: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
            ],
            points: [
                { x: 0, y: 1, i: -1 }, { x: 0, y: 2, i: -1 }, { x: 0, y: 4, i: -1 }, { x: 0, y: 5, i: -1 }, { x: 0, y: 7, i: -1 },
                { x: 1, y: 0, i: -1 }, { x: 1, y: 1, i: -1 }, { x: 1, y: 3, i: -1 }, { x: 1, y: 5, i: -1 }, { x: 1, y: 6, i: -1 }, 
                { x: 2, y: 2, i: -1 }, { x: 2, y: 3, i: -1 }, { x: 2, y: 4, i: -1 }, { x: 2, y: 5, i: -1 }, { x: 2, y: 6, i: -1 },
            ],
            indexUserDisplay: 0,
        }
    },
    methods: {
        closeStatus() {
            this.isShowStatusUser = false
        },
        actionBoard(e) {
            this.indexUserDisplay = Number.parseInt(e.currentTarget.dataset.point)
            this.isShowStatusUser = true
        }
    },
    async created() {
        await this.store.logIn(this)
        this.listUser = await UserService.getAll()
        console.log('ListUser: ', this.listUser)

        this.page = Number.parseInt(this.$route.query.page) || 1

        let indexUser = (this.page - 1) * this.points.length
        for(let i = 0; i < this.points.length && indexUser < this.listUser.length; i ++) {
            if (indexUser >= this.listUser.length) {
                break
            }

            this.points[i].i = indexUser
            this.locations[this.points[i].x][this.points[i].y] = (i + 1)

            indexUser += 1
        }
    },

}
</script>

<style>

</style>