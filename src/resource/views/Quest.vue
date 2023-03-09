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
                <router-link @click.prevent="" :data-cluster="e._id" :style="`top: 450px; left: ${10 + i*100}px;`" class="position-absolute d-inline-block" to="/quest/abc/a/fight">
                    <img class="" style="height: 52px; width: 92px;" :src="`${HTTP_GG_DRIVE}1A1s6d1GPoz9Yj7R63aS1ZoPDkYQvr6PC`" alt="">
                </router-link>
            </template>

            <!-- Bottom -->
            <router-view name="bottom-function" />
        </section>

        <Board :isShow="isShow" @closeStatus="closeStatus">
            <div>
                <h2 style="width: 700px; height: 550px;">Hahahhah</h2>
            </div>
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
            isShow: false,
            HTTP_GG_DRIVE,
            quest: [],
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
        this.store.logIn(this)
        this.quest = await QuestService.get(this.$route.params.idQuest)
    },
}
</script>
