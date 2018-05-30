<template>
    <div v-html="icon" class="flex items-center"></div>
</template>

<script>
    export default {
        props: ['name'],
        computed: {
            icon() {
                return this.icons[this.name]
            }
        }
    }
</script>
