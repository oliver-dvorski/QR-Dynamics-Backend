<template>
    <div class="loader" :class="shouldLoad ? 'loading' : ''" @click="cancel">
        <div class="bg"></div>
        <div class="spinner"></div>
    </div>
</template>

<script>
    export default {
        props: ['condition'],
        computed: {
            shouldLoad () {
                return this.condition
            }
        },
        methods: {
            cancel () {
                this.$store.commit('loading', false)
            }
        }
    }
</script>
