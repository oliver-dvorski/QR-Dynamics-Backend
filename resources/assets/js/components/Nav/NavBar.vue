<template>
    <div class="container mx-auto nav-bar">
        <div class="list-parent">
            <ul class="list">
                <NavItem name="web">Web</NavItem>
                <NavItem name="text">Text</NavItem>
                <NavItem name="location">Location</NavItem>
                <NavItem name="email">E-mail</NavItem>
                <NavItem name="wifi">Wi-Fi</NavItem>
            </ul>
        </div>
    </div>
</template>

<script>
    import NavItem from './NavItem'

    export default {
        components: { NavItem }
    }
</script>
