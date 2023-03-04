<template>
    <section data-board-body-show="bag" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 600px;">
        <div class="row g-1 overflow-auto scrollbar" style="height: 100px; margin-left: 10px;">
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
            <template v-for="(value, key, index) in skills">
                <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                    <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                        <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                    </button>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        skills: { type: Object, default: {}, },
    }
}
</script>
