<template>
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" src="@/assets/img/quest.png" alt="">
        </section>

        <!-- Content -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10;">
            <!-- Header -->
            <router-view name="header-function" />

            <!-- Body -->
            <template v-for="(e, i) of quest.clusters">
                <router-link @click.prevent="actionBoard" :data-cluster="e._id" :style="`top: 450px; left: ${10 + i*100}px;`" class="position-absolute d-inline-block" to="">
                    <img class="" style="height: 52px; width: 92px;" :src="`${HTTP_GG_DRIVE}1A1s6d1GPoz9Yj7R63aS1ZoPDkYQvr6PC`" alt="">
                </router-link>
            </template>

            <!-- Bottom -->
            <router-view name="bottom-function" />
        </section>

        <Board v-if="quest?.clusters" :isShow="isShowStatusCluster" index="cluster-status" @closeStatus="closeStatus">
            <!-- Header -->
            <section class="mx-3 border-bottom border-2" style="border-color: #97d4f1 !important;">
                <h2 class="fs-5">{{ quest?.clusters[clusterStatusIndex]?.name }}</h2>
            </section>
            <!-- Body -->
            <section class="row mt-2 ms-1" style="width: 700px; height: 300px;">
                <div class="col-9">
                    <table class="w-100">
                        <tbody>
                            <tr class="row g-0 border-bottom border-1">
                                <th class="border-end border-1 col fs-6">Tu vi</th>
                                <td class="col fs-6">
                                    <span>{{ quest?.clusters[clusterStatusIndex]?.immortalities[0].level.name }}</span>
                                    <span class="ms-1">{{ quest?.clusters[clusterStatusIndex]?.immortalities[0].level.level }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col mb-4 border-start border-2">
                    <router-link class="mt-4 d-inline-block text-decoration-none fs-6 fw-semibold px-2 py-1 rounded"
                        style="background-color: #c70000a0; color: #e1e1e1d6;"
                        to="/quest/abc/a/fight"
                    >Tấn Công</router-link>
                </div>
            </section>
        </Board>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE } from '../../../env'
import { Board } from '@/util/components.js'
import { useUserStore } from '@/stores/useUserStore'
import { QuestService } from '@/util/index.js'

export default {
    setup() {
        const store = useUserStore()
        return {
            store,
        }
    },
    components: { Board, },
    data() {
        return {
            isShowStatusCluster: false,
            HTTP_GG_DRIVE,
            quest: [],
            clusterStatusIndex: 0,
        }
    },
    methods: {
        closeStatus() {
            this.isShowStatusCluster = false
        },
        actionBoard() {
            this.isShowStatusCluster = true
        }
    },
    async created() {
        this.store.logIn(this)
        this.quest = await QuestService.get(this.$route.params.idQuest)
    },
}
</script>
