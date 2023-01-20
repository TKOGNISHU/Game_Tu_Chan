<template>
    <section class="h-100 text-center background">
        <router-link to="">
            <img style="width: 50px;" src="@/assets/img/nam-tu-si/nam_tu_si_no_background.png" alt="">
        </router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            avatars: [
                {
                    first: '@/assets/img/nam-tu-si/nam_tu_si_no_background.png',
                    second: '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_second.png',
                    between: '@/assets/img/nam-tu-si/nam_tu_si_no_background_between.png',
                    finally: '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_finally.png',
                },
            ],
            skills: {
                'normal': {
                    first: '@/assets/img/skills/normal/normal_first.png',
                    finally: '@/assets/img/skills/normal/normal_finally.png',
                },
            },
            plot: [ // turn
                [
                    { // you
                        you: [
                            {
                                stt: 1,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 2,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 3,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 4,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 5,
                                health: 1000,
                                mp: 100,
                            },
                        ],
                        defense: [
                            {
                                stt: 1,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 2,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 3,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 4,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 5,
                                health: 1000,
                                mp: 100,
                            },
                        ],
                        local: 1,
                        beingAttacked: [1], // 1, 2, 3, 4, 5, first row, last row, first column, last column
                        damage: [100],
                        attackedEffect: 'normal',
                        heal: [0],
                        beingHealed: [0], // 0 => nothing, 1 => only, 2 => random, 3 => all
                        healedEffect: '',
                        // healingNumberOf: 0, // 0 => nothing, > 0 => healing number of
                        preStatuses: [0], // > 0 => pre heal, < 0 => pre damage
                    },
                    { // defense
                        you: [
                            {
                                stt: 1,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 2,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 3,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 4,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 5,
                                health: 1000,
                                mp: 100,
                            },
                        ],
                        defense: [
                            {
                                stt: 1,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 2,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 3,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 4,
                                health: 1000,
                                mp: 100,
                            },
                            {
                                stt: 5,
                                health: 1000,
                                mp: 100,
                            },
                        ],
                        local: 1,
                        beingAttacked: [1],
                        damage: [100],
                        effect: ['http://localhost...'],
                        heal: [0],
                        beingHealed: [0],
                        preStatuses: [0],
                    },
                ]
            ]
        }
    },
}
</script>
