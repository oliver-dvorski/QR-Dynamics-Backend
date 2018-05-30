<template>
    <li>
        <router-link :to="'/' + name" class="no-underline text-grey-darker py-6 px-8 flex items-center" :class="isActive">
            <Icon :name="name"></Icon>
            <span class="ml-2"><slot></slot></span>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: ['name'],
        computed: {
            isActive() {
                return this.name == this.$route.name ? 'text-brand' : null
            }
        }
    }
</script>
