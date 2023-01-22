<template>
    <section class="position-absolute top-0 end-0 start-0 h-100 text-center background">
        <div class="status-bar" style="height: 100px;"><h1>Status</h1></div>

        <div class="row battle-field">
            <div class="col bg-dark">
                <div class="row g-0">
                    <div v-for="i of [1, 2, 3]" class="col bg-success" style="height: 140px;">
                        <!-- <img v-if="renderLocalY(i, plot[0][0].you[yLocal])" 
                            :src="avatars[plot[0][0].you[yLocal].avatar].first" alt=""> -->
                            <h1 v-if="renderLocalY(i, plot[0][0].you[yLocal].local)">{{ plot[0][0].you[yLocal].local }}</h1>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col bg-danger" style="height: 140px;"></div>
                    <div class="col bg-success" style="height: 140px;"></div>
                    <div class="col bg-warning" style="height: 140px;"></div>
                </div>
                <div class="row g-0">
                    <div class="col bg-warning" style="height: 140px;"></div>
                    <div class="col bg-danger" style="height: 140px;"></div>
                    <div class="col bg-success" style="height: 140px;"></div>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col bg-dark">
                <div class="row g-0">
                    <div class="col bg-success" style="height: 140px;"></div>
                    <div class="col bg-warning" style="height: 140px;"></div>
                    <div class="col bg-danger" style="height: 140px;"></div>
                </div>
                <div class="row g-0">
                    <div class="col bg-danger" style="height: 140px;"></div>
                    <div class="col bg-success" style="height: 140px;"></div>
                    <div class="col bg-warning" style="height: 140px;"></div>
                </div>
                <div class="row g-0">
                    <div class="col bg-warning" style="height: 140px;"></div>
                    <div class="col bg-danger" style="height: 140px;"></div>
                    <div class="col bg-success" style="height: 140px;"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            yLocal: 0,
            dLocal: 0,
            avatars: {
                'monk': {
                    first: '@/assets/img/nam-tu-si/nam_tu_si_no_background.png',
                    second: '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_second.png',
                    between: '@/assets/img/nam-tu-si/nam_tu_si_no_background_between.png',
                    finally: '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_finally.png',
                },
            },
            skills: {
                'normal': {
                    first: '@/assets/img/skills/normal/normal_first.png',
                    finally: '@/assets/img/skills/normal/normal_finally.png',
                },
            },
            plot: [ // turn
                [ // turn 1
                    { // you
                        you: [
                            {
                                local: 1,
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                local: 3,
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                local: 5,
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                local: 7,
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                local: 9,
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                        ],
                        defense: [
                            {
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                            {
                                avatar: 'monk',
                                health: 1000,
                                mp: 100,
                            },
                        ],
                        local: 1,
                        preStatuses: [0], // > 0 => pre heal, < 0 => pre damage // list of status is actions before attacker attack.
                        beingAttacked: [1], // 1, 2, 3, 4, 5, first row, last row, first column, last column
                        damage: [100],
                        attackedEffect: 'normal',
                        heal: [0],
                        beingHealed: [0], // 0 => nothing, 1 => only, 2 => random, 3 => all
                        healedEffect: '',
                    },
                    { // defense
                    },
                ]
            ]
        }
    },
    methods: {
        renderLocalY(i, local) {
            console.log(i, local, this.yLocal++)
            if (this.yLocal < 5) {
                return i == local
            }
        }
    }
}
</script>
