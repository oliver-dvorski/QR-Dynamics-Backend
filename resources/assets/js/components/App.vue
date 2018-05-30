<template>
    <div>
        <NavBar></NavBar>
        <div class="container mx-auto">
            <router-view></router-view>
        </div>
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
