<template>
    <div>
        <div class="bg-white rounded mt-8 shadow-md font-medium">
            <ul class="list-reset flex justify-center text-xl overflow-y">
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
