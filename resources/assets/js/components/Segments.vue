<template>
    <div class="segments select-none">
        <div
            v-for="segment in segments"
            @click="select(segment)"
            :class="active == segment ? 'active' : null"
            class="segment"
            >{{ segment }}</div>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            segments: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                active: ''
            }
        },
        methods: {
            select(segment) {
                this.active = segment
                this.$emit('change', this.active)
            }
        },
        mounted() {
            this.active = this.segments[0]
        }
    }
</script>
