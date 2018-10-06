<template>
    <div v-html="icon" class="flex items-center"></div>
</template>

<script>
    export default {
        props: ['name', 'size'],
        computed: {
            icon() {
                return this.icons[this.name][this.size]
            }
        }
    }
</script>
