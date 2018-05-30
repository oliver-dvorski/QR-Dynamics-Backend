<template>
    <div>
        <div class="bg-white rounded mt-8 shadow-lg font-medium">
            <ul class="list-reset flex justify-center text-xl overflow-y">
                <NavItem icon="web">Web</NavItem>
                <NavItem icon="text">Text</NavItem>
                <NavItem icon="location">Location</NavItem>
                <NavItem icon="email">E-mail</NavItem>
                <NavItem icon="wifi">Wi-Fi</NavItem>
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
