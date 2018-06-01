<template>
    <li class="navbar-item">
        <router-link :to="'/' + name" class="link" :class="isActive">
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
                return this.name == this.$route.name ? 'is-active' : null
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
            this.setIconSize()
            window.addEventListener('resize', this.setIconSize)
        }
    }
</script>
