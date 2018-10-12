<template>
  <li class="navbar-item">
    <router-link
      :to="'/' + name"
      :class="isActive"
      class="link outline-none">
      <Icon
        :name="name"
        :size="iconSize"/>
      <span class="ml-2"><slot/></span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
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
  mounted() {
    this.setIconSize()
    window.addEventListener('resize', this.setIconSize)
  },
  methods: {
    setIconSize() {
      this.iconSize = 16
    }
  },
}
</script>
