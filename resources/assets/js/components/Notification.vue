<template>
  <transition name="slide-in">
    <div
      v-show="show"
      class="rounded shadow bg-brand text-white fixed pin-r pin-b m-6 px-6 py-4 max-w-sm">
      <p class="mr-8">{{ message }}</p>
      <icon
        name="close"
        size="16"
        class="text-white absolute pin-t pin-r mt-4 mr-4 cursor-pointer"
        @click.native="close"/>
    </div>
  </transition>
</template>

<script>
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
