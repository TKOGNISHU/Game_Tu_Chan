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
            <template v-for="(e, i) of quest.clusters" :key="`quest-${e._id}-${i}`">
                <router-link @click.prevent="actionBoard" :data-cluster="i" :style="`top: ${e?.location?.top}; left: ${e?.location?.left};`"
                    :data-name-cluster="e.name" class="position-absolute d-inline-block" to="">
                    <img class="" style="height: 52px; width: 92px;" :src="`${HTTP_GG_DRIVE}${e?.image}`" alt="">
                </router-link>
            </template>

            <!-- Bottom -->
            <router-view name="bottom-function" />
        </section>

        <section class="indicator position-fixed d-none" style="width: 25px; height: 96px; z-index: 1000; top: 0px; left: 0px">
            <div class="animation-indicator">
                <div class="animation-indicator-scale" :style="
                    `height: 96px; width: 25px; background-image: url('${indicator}'); 
                    background-size: cover; background-repeat: no-repeat;`
                "></div>
            </div>
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
                                <th class="border-end border-1 col-4 fs-6">Tu vi</th>
                                <td class="col fs-6">
                                    <span class="fw-semibold">{{ quest?.clusters[clusterStatusIndex]?.maxLevel?.name }}</span>
                                    <span class="ms-1 fw-semibold">{{ quest?.clusters[clusterStatusIndex]?.maxLevel?.level }}</span>
                                </td>
                            </tr>
                            <tr class="row g-0 border-bottom border-1">
                                <th class="border-end border-1 col-4 fs-6">Chiến lợi</th>
                                <td class="col fs-6">
                                    <div v-for="item of quest?.clusters[clusterStatusIndex]?.awards.items" :key="`quest-board-${item}`">
                                        <span class="fw-semibold">{{ item.item.name }}</span>
                                        <span class="ms-1 fw-semibold">x{{ item.quantity }}</span>
                                    </div>
                                    <div v-for="item of quest?.clusters[clusterStatusIndex]?.awards.equipments" :key="`quest-board-${item}`">
                                        <span class="fw-semibold">{{ item?.equip?.name }}</span>
                                        <span class="ms-1 fw-semibold">x{{ item?.quantity }}</span>
                                    </div>
                                    <div v-for="item of quest?.clusters[clusterStatusIndex]?.awards.skills" :key="`quest-board-${item}`">
                                        <span class="fw-semibold">{{ item?.skill?.name }}</span>
                                        <span class="ms-1 fw-semibold">x{{ item?.quantity }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col mb-4 border-start border-2">
                    <router-link class="mt-4 d-inline-block text-decoration-none fs-6 fw-semibold px-2 py-1 rounded"
                        style="background-color: #c70000a0; color: #e1e1e1d6;"
                        :to="{name: 'fight', params: {idCluster: `${quest?.clusters[clusterStatusIndex]?._id}`}}"
                    >Tấn Công</router-link>
                </div>
            </section>
        </Board>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE } from '#/env'
import { Board } from '@/components/index'
import { useUserStore } from '@/stores/index'
import { QuestService } from '@/services/index'

import indicator from '@/assets/img/indicator-animation.png'

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
            indicator: indicator,
            quest: [],
            clusterStatusIndex: 0,
        }
    },
    watch: {
    },
    methods: {
        closeStatus() {
            this.isShowStatusCluster = false
        },
        actionBoard(e) {
            this.clusterStatusIndex = Number.parseInt(e.currentTarget.dataset.cluster)
            this.isShowStatusCluster = true
        }
    },
    updated() {
        console.log('Change indicator')
        const indicator = $('.indicator')
        let isExist = false
        console.log('quest display: ', this.quest)
        this.quest.clusters.forEach(cluster => {
            if (this.store.user?.quests.hasOwnProperty(this.quest.name)) {
                if (this.store.user?.quests[this.quest.name]?.next && this.store.user?.quests[this.quest.name]?.next.hasOwnProperty(cluster?.name)) {
                    const elementCluster = $(`[data-name-cluster="${cluster.name}"]`).getBoundingClientRect()
                    indicator.classList.remove('d-none')
                    isExist = true
                    indicator.style.translate = `${elementCluster.x + elementCluster.width/3}px ${elementCluster.y - elementCluster.height * 2}px`
                    console.log('Changed..................')
                }
            }
        })

        if (!isExist) {
            indicator.classList.add('d-none')
        }
    },
    async created() {
        this.store.logIn(this)
        this.quest = await QuestService.get(this.$route.params.idQuest)
    },
    mounted() {
    },
}
</script>

<style>
.animation-indicator {
    animation-name: indicator-top-down-top;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    animation-duration: 1s;
}

.animation-indicator-scale {
    animation-name: indicator-scale;
    animation-duration: 0.4s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
}
</style>
