<template>
    <section data-board-body-show="training" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <ListCharacter :immortalities="immortalities"/>

        <!-- Right -->
        <section class="col">
            <div class="row g-0 h-100">
                <section class="col">
                    <!-- list skill -->
                    <section class="border-bottom pb-1">
                        <div class="row g-1 overflow-auto scrollbar me-2" style="height: 34px; margin-left: 10px;">
                            <template v-for="(value, key, index) in immortality?.skills" :key="`training-${index}`">
                                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                    <button @click="displaySkill" :data-skill="key" class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                        <img :class="`h-100 w-100`" :src="`${HTTP_GG_DRIVE}${value ? value?.image : 'ERR'}`" alt="">
                                    </button>
                                </div>
                            </template>
                        </div>
                    </section>
                    <!-- skill title -->
                    <section class="row g-0">
                        <div class="col-2">
                            <template v-for="(value, key, index) in immortality?.skills" :key="`training-${index}`">
                                <div class="d-flex align-items-center me-1" style="width: 90px; height: 90px; background-color: #cccccc80;">
                                    <img :class="`w-100 h-100`" :src="`${HTTP_GG_DRIVE}${value ? value?.image : 'ERR'}`" alt="">
                                </div>
                            </template>
                        </div>
                        <div class="col">
                            <div class="row g-0 align-items-center justify-content-center">
                                <!-- <div class="row border-end">
                                    <div class="col"><span class="border-bottom">Hỏa Cầu</span></div>
                                    <div class="col"><span class="border-bottom">Tầng 2</span></div>
                                </div> -->
                                <table class="col-6 border-end">
                                    <tr class="border-bottom">
                                        <td><span>Hỏa Cầu</span></td>
                                        <td class="border-start"><span class="ms-1">Tầng 1</span></td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <td colspan="2">
                                            <span class="border-end pe-1">Tiến độ</span>
                                            <span>1/1</span>
                                        </td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <td colspan="2">
                                            <div class="d-flex g-0 align-items-center">
                                                <span class="d-inline-block border-end pe-1">Tổn hao</span>
                                                <div class="d-inline-block ps-1 overflow-auto scrollbar" style="height: 40px; width: 70%;">
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <div class="col ms-2 fs-3">></div>
                                <table class="col-5 border-end">
                                    <tr class="border-bottom">
                                        <td><span>Tầng 2</span></td>
                                        <td class="border-start"><span class="ms-1">Luyện Khí Kì Tầng 2</span></td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <td colspan="2">
                                            <div class="d-flex g-0 align-items-center">
                                                <span class="d-inline-block border-end pe-1">Yêu cầu</span>
                                                <div class="d-inline-block ps-1 overflow-auto scrollbar" style="height: 40px; width: 70%;">
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                    <p class="m-0">111111111</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </section>
                    <!-- consumes -->
                    <section class="mt-2 d-flex align-items-center border-top border-bottom">
                        <div class="border-end px-2">Chi phí tăng tốc:</div>
                        <div class="w-100 ps-1 overflow-auto scrollbar" style="height: 40px;">
                            <p class="m-0">111111111</p>
                            <p class="m-0">111111111</p>
                            <p class="m-0">111111111</p>
                            <p class="m-0">111111111</p>
                            <p class="m-0">111111111</p>
                        </div>
                    </section>

                    <section class="d-flex mt-2">
                        <button @click.prevent="showSkill" data-board-btn-target="skillsBag" class="d-inline-block ms-auto rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #ff1a1a6e; color: #fdfefe85;">Tăng Tốc</button>
                    </section>
                </section>
                <section class="col-2 border-start">
                    <!-- Header -->
                    <section class="text-start d-flex border-bottom">
                        <button @click.prevent="showSkill" data-board-btn-target="skillsBag" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Bí Tịch</button>
                    </section>

                    <!-- Body -->
                    <section>
                        
                    </section>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE } from '#/env'
import { ListCharacter } from '@/components/index.js'
import { useAppStore } from '@/stores/useAppStore'
export default {
    components: { ListCharacter, },
    props: {
        immortalities: { type: Array, default: [] },
    },
    setup() {
        const appStore = useAppStore()
        return {
            appStore,
            getShowCharacter: appStore.getShowCharacter,
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            immortality: {},
            show: [],
        }
    },
    watch: {
        "appStore.showCharacter"() {
            this.immortality = this.immortalities[this.appStore.getShowCharacter] || {}
            this.description = ''
        },
        immortalities() {
            console.log("character: ", this.immortalities, this.immortality)
            this.immortality = this.immortalities[this.appStore.getShowCharacter] || {}
            this.description = ''
        },
        immortality() {
            this.updateShow('skills')
        }
    },
    methods: {
        updateShow(target) {
            
        },
        showSkill(e) {
            this.updateShow(e.currentTarget.dataset.boardBtnTarget)
        }
    },
}
</script>
