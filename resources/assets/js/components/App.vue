<template>
    <div class="container mx-auto">
        <NavBar></NavBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './Nav/NavBar'

    export default {
        components: { NavBar }
    }
</script>

<style lang="sass">
    svg
        fill: currentColor
</style>
