<template>
    <div class="container mx-auto">
        <div class="bg-white md:rounded md:mt-8 shadow-md font-medium flex flex-1 overflow-auto">
            <ul class="list-reset flex justify-around text-xl">
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

<style lang="sass" scoped>
    @media (max-width: 576px)
        .container
            padding: 0
    @media (max-width: 768px)
        .container
            position: relative
            &::after
                display: block
                content: ''
                position: absolute
                width: 2rem
                height: 100%
                background: url('/img/gradient.svg')
                top: 100%
                right: 1rem
                transform: translateY(-100%)
                @media (max-width: 576px)
                    right: 0

</style>
