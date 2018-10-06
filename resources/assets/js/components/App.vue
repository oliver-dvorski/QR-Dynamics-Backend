<template>
    <div>
        <NavBar></NavBar>
        <div class="container mx-auto">
            <router-view></router-view>
        </div>
        <Notification></Notification>
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
