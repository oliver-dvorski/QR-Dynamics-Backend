<template>
  <div class="segments select-none">
    <div
      v-for="(segment, index) in segments"
      :key="index"
      :class="active == segment ? 'active' : null"
      class="segment"
      @click="select(segment)"
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
  mounted() {
    this.active = this.segments[0]
  },
  methods: {
    select(segment) {
      this.active = segment
      this.$emit('change', this.active)
    }
  },
}
</script>
