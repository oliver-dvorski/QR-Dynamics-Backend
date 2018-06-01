<template>
    <li class="navbar-item">
        <router-link :to="'/' + name" class="no-underline text-grey-darker py-4 px-4 md:py-6 md:px-8 flex items-center" :class="isActive">
            <Icon :name="name" :size="iconSize"></Icon>
            <span class="ml-2"><slot></slot></span>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: ['name'],
        data() {
            return {
                iconSize: 24
            }
        },
        computed: {
            isActive() {
                return this.name == this.$route.name ? 'text-brand' : null
            }
        },
        methods: {
            setIconSize() {
                if (window.innerWidth < 768) {
                    this.iconSize = 16
                    return
                }
                this.iconSize = 24
                console.log(this.iconSize)
            }
        },
        mounted() {
            setIconSize()
            window.addEventListener('resize', this.setIconSize)
        }
    }
</script>
