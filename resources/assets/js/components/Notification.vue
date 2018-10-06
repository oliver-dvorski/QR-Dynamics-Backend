<template>
    <transition name="slide-in">
        <div class="rounded shadow bg-brand text-white fixed pin-r pin-b m-6 px-6 py-4 max-w-sm" v-show="show">
            <p class="mr-8">{{ message }}</p>
            <icon name="close" size="16" class="text-white absolute pin-t pin-r mt-4 mr-4 cursor-pointer" @click.native="close"></icon>
        </div>
    </transition>
</template>

<script>
    import utils from '@/utils'
    import eventBus from '@/eventBus'

    export default {
        data () {
            return {
                show: false,
                message: ''
            }
        },
        mounted () {
            eventBus.$on('flash', message => {
                this.show = true
                this.message = message
                setTimeout(() => {
                    this.show = false
                }, 3000)
            })
        },
        methods: {
            close () {
                this.show = false
            }
        }
    }
</script>
