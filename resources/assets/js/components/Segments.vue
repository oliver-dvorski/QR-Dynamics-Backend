<template>
    <div class="segments select-none">
        <div class="segment" :class="active == 'static' ? 'active' : null" @click="static">Static</div>
        <div class="segment" :class="active == 'dynamic' ? 'active' : null" @click="dynamic">Dynamic</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 'static'
            }
        },
        methods: {
            static() {
                this.active = 'static'
            },
            dynamic() {
                this.active = 'dynamic'
            }
        }
    }
</script>
