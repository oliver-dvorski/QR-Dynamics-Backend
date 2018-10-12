<template>
  <div
    class="flex items-center"
    v-html="icon"/>
</template>

<script>
export default {
  props: {
    name: {
        type: String,
        required: true
    },
    size: {
        type: [ Number, String ],
        default: 16
    }
  },
  computed: {
    icon() {
      return this.icons[this.name][this.size]
    }
  }
}
</script>
