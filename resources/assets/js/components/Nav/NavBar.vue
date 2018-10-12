<template>
  <div 
    class="bg-brand text-white shadow-md" 
    style="padding-top: 5rem">
    <div class="container mx-auto nav-bar">
      <h1 class="font-medium mb-4 px-4 md:px-0">QR Dynamics</h1>
      <div class="list-parent">
        <ul class="list">
          <NavItem name="web">Web</NavItem>
          <NavItem name="wifi">Wi-Fi</NavItem>
          <NavItem name="location">Location</NavItem>
          <NavItem name="email">E-mail</NavItem>
          <NavItem name="text">Text</NavItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem'

export default {
  components: { NavItem }
}
</script>
