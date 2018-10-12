<template>
  <div
    :class="shouldLoad ? 'loading' : ''"
    class="loader"
    @click="cancel">
    <div class="bg"/>
    <div class="spinner"/>
  </div>
</template>

<script>
export default {
  props: {
    condition: {
      type: Boolean,
      required: true
    }
  },
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
