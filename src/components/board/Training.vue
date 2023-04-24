<template>
    <section data-board-body-show="training" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <ListCharacter :immortalities="store.immortalities"/>

        <!-- Right -->
        <section class="col">
            <div class="row g-0 h-100">
                <section class="col">
                    <!-- list skill -->
                    <section class="border-bottom pb-1">
                        <div class="row g-1 overflow-auto scrollbar me-2" style="height: 34px; margin-left: 10px;">
                            <template v-for="(value, key, index) in immortality?.skills" :key="`training-${index}`">
                                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                    <button @click="displaySkill" :data-skill-key="key" class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                        <img :class="`h-100 w-100`" :src="`${HTTP_GG_DRIVE}${value ? value?.image : 'ERR'}`" alt="">
                                    </button>
                                </div>
                            </template>
                        </div>
                    </section>
                    <!-- skill title -->
                    <section class="row g-0">
                        <!-- image -->
                        <div class="col-2">
                            <div class="d-flex align-items-center me-1" style="width: 90px; height: 90px; background-color: #cccccc80;">
                                <img :class="`w-100 h-100`" :src="`${HTTP_GG_DRIVE}${showSkill ? immortality.skills[showSkill]?.image : 'ERR'}`" alt="">
                            </div>
                        </div>
                        <!-- detail -->
                        <div class="col">
                            <div class="row g-0 align-items-center justify-content-center">
                                <!-- Current floor -->
                                <table class="col-6 border-end">
                                    <tr class="border-bottom">
                                        <td><span>{{ showSkill && store.skills[showSkill] && store.skills[showSkill].name }}</span></td>
                                        <td class="border-start"><span class="ms-1">{{ showSkill && immortality.skills[showSkill] && immortality.skills[showSkill].floor.name }}</span></td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <td colspan="2">
                                            <span class="border-end pe-1">Tiến độ</span>
                                            <span>
                                                {{ showSkill && immortality.skills[showSkill] && immortality.skills[showSkill].exp }} / {{ showSkill && immortality.skills[showSkill] && immortality.skills[showSkill].floor.trainedTime }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <td colspan="2">
                                            <div class="d-flex g-0 align-items-center">
                                                <span class="d-inline-block border-end pe-1">Tổn hao</span>
                                                <div class="d-inline-block ps-1 overflow-auto scrollbar" style="height: 40px; width: 70%;">
                                                    <p 
                                                        v-for="(e, i) of ((showSkill && immortality.skills[showSkill]) ? immortality.skills[showSkill].floor.consume : [])"
                                                        class="m-0" :key="`training-skill-consumes-${i}`"
                                                    >{{ e.type }}: {{ e.value }}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <div class="col ms-2 fs-3">></div>
                                <!-- Next floor -->
                                <table class="col-5 border-end">
                                    <tr class="border-bottom">
                                        <td><span>{{ newFloorSkill?.name }}</span></td>
                                        <td class="border-start"><span class="ms-1">{{ newFloorSkill?.newLevel?.name }} {{ newFloorSkill?.newLevel?.level }}</span></td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <td colspan="2">
                                            <div class="d-flex g-0 align-items-center">
                                                <span class="d-inline-block border-end pe-1">Yêu cầu</span>
                                                <div class="d-inline-block ps-1 overflow-auto scrollbar" style="height: 40px; width: 70%;">
                                                    <p
                                                        v-for="(e, i) of newFloorSkill.requirements"
                                                        class="m-0" :key="`training-skill-requirement-${i}`"
                                                    >{{ e.type }}: {{ e.value }}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </section>
                    <!-- Cost -->
                    <section class="mt-2 d-flex align-items-center border-top border-bottom">
                        <div class="border-end px-2">Chi phí tăng tốc:</div>
                        <div class="w-100 ps-1 overflow-auto scrollbar" style="height: 40px;">
                            <p 
                                v-for="(e, i) of ((showSkill && immortality.skills[showSkill]) ? immortality.skills[showSkill].floor.costs : [])"
                                class="m-0" :key="`training-skill-costs-${i}`"
                            >{{ e.item.name }} ({{ e.item.value }}): {{ e.quantity }}</p>
                        </div>
                    </section>

                    <!-- increase btn -->
                    <section :class="`d-flex mt-2 ${
                        (Object.keys(newFloorSkill).length == 0 &&
                        (
                            (
                                showSkill && immortality.skills[showSkill] &&
                                immortality.skills[showSkill].exp
                            ) ==
                            (
                                showSkill && immortality.skills[showSkill] &&
                                immortality.skills[showSkill].floor.trainedTime
                            )
                        )
                        ) ? 'd-none' : ''}`"
                    >
                        <button v-if="immortality.trainingSkill == showSkill" @click.prevent="increaseSpeedTraining" class="d-inline-block ms-auto rounded border-0 px-3 py-1 me-1 fw-semibold" style="background-color: #ff1a1a6e; color: #fdfefe85;">Tăng Tốc</button>
                        <button
                            v-else @click.prevent="training" :data-skill-key="showSkill"
                            class="d-inline-block ms-auto rounded border-0 px-3 py-1 me-1 fw-semibold"
                            style="background-color: #ff1a1a6e; color: #fdfefe85;"
                        >Tu Luyện</button>
                    </section>
                </section>
                <!-- SKills Bag -->
                <section class="col-2 border-start">
                    <!-- Header -->
                    <section class="text-center border-bottom">
                        <h5
                            class="me-1 fw-semibold"
                            style="color: #05eaff;"
                        >Bí Tịch</h5>
                    </section>

                    <!-- Body -->
                    <section class="row g-1 p-1">
                        <template v-for="(value, key, index) in (store.user ? store.user.bag.skills : [])" :key="`training-bag-skills-${index}`">
                            <div v-if="!(immortality?.skills && immortality?.skills[value?.skill?.name])" class="col-6 p-2 position-relative d-flex align-items-center bag-item" style="height: 40px; background-color: #cccccc80;">
                                <img :class="`h-100 w-100`" :src="`${HTTP_GG_DRIVE}${value ? value.skill?.image : 'ERR'}`" alt="">
                                <div class="d-none p-2 position-absolute top-0 rounded" style="width: 200px; background-color: #00000060;">
                                    <div style="height: 100px;">
                                        <p class="overflow-hidden text-light">{{ value && value.skill.name }}</p>
                                        <p class="overflow-hidden text-light">{{ value && value.skill.description }}</p>
                                    </div>
                                    
                                    <div class="d-flex">
                                        <button @click="training" :data-skill-key="value.skill.name"
                                            class="d-inline-block rounded ms-auto p-1 border-0 overflow-hidden"
                                            style="height: 30px; background-color: #00ddd9cc; color: #fdfefe85;"
                                        >Tu Luyện</button>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </section>
                </section>
            </div>
        </section>

        <!-- Toast -->
        <section class="toast-container position-fixed top-0 end-0 p-3">
            <div id="trainingToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <!-- <div class="toast-header"> -->
                    <!-- <img src="..." class="rounded me-2" alt="...">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small> -->
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> -->
                <!-- </div> -->
                <div class="toast-body d-flex justify-content-between">
                    {{ message }}
                    <button type="button" class="btn-close text-end" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </section>
        <!-- <ShowToast idToast="trainingToast" :isShow="showToast" :message="message" /> -->
    </section>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
import { HTTP_GG_DRIVE } from '#/env'
import { ListCharacter } from '@/components/index.js'
import { useUserStore, useAppStore } from '@/stores'
import { UserService, } from '@/services'
export default {
    components: { ListCharacter, },
    props: {},
    setup() {
        const store = useUserStore()
        const appStore = useAppStore()
        return {
            store,
            appStore,
            getShowCharacter: appStore.getShowCharacter,
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            immortality: {},
            showSkill: '',
            newFloorSkill: {},
            message: '',
            showToast: false,
        }
    },
    watch: {
        "appStore.showCharacter"() {
            this.immortality = this.store.immortalities[this.appStore.getShowCharacter] || {}
        },
        'store.immortalities'() {
            // console.log("character: ", this.store.immortalities, this.immortality)
            this.immortality = this.store.immortalities[this.appStore.getShowCharacter] || {}
            this.showSkill = ''
            this.newFloorSkill = {}
        },
        immortality() {
            this.showSkill = ''
        },
        showSkill() {
            for(let i = 0; i < this.store?.skills[this.showSkill]?.floors.length - 1; i++) {
                const floor = this.store.skills[this.showSkill].floors[i]
                if (floor.name == this.immortality.skills[this.showSkill].floor.name) {
                    const nextFloor = this.store.skills[this.showSkill].floors[i+1] && {}
                    if (nextFloor) this.newFloorSkill = new Object(nextFloor)
                    break
                }
            }
            console.log(
                this.newFloorSkill,
                this.immortality.skills[this.showSkill].exp,
                this.immortality.skills[this.showSkill].floor.trainedTime,
                Object.keys(this.newFloorSkill).length == 0 && this.immortality.skills[this.showSkill].exp == this.immortality.skills[this.showSkill].floor.trainedTime
            )
        }
    },
    methods: {
        displaySkill(e) {
            const key = e.currentTarget.dataset.skillKey
            this.showSkill = key
        },
        async increaseSpeedTraining(e) {
            try {
                const currentShowSKill = this.showSkill
                const result = await UserService.increaseSpeed(
                    this.store.getUser._id, this.immortality._id, this.showSkill.replace(/ /g, '-')
                )
                await this.store.getData()
                this.showSkill = currentShowSKill

                this.message = result.message

                // Show toast
                const toastLiveExample = document.getElementById('trainingToast')
                const toast = new Toast(toastLiveExample)
                toast.show()
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        },
        async training(e) {
            try {
                const key = e.currentTarget.dataset.skillKey
                const result = await UserService.training(
                    this.store.getUser._id, this.immortality._id, key.replace(/ /g, '-')
                )
            } catch (error) {
                console.log(error)
            }
        },
        // showToast(e) {
            
        // }
    },
}
</script>

<style>
.bag-item:hover > div {
    display: block !important;
}
</style>
