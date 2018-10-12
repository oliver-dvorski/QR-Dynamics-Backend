<template>
  <div>
    <NavBar/>
    <div class="container mx-auto">
      <router-view/>
    </div>
    <Notification/>
  </div>
</template>

<script>
import NavBar from './Nav/NavBar'
import Notification from './Notification'

export default {
  components: { NavBar, Notification }
}
</script>

<style lang="sass">
    svg
        fill: currentColor
</style>
