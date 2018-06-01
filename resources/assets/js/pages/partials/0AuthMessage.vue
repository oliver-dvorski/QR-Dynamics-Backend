<template>
    <div :class="styling">
        <p class="leading-normal mb-4">
            Due to technical limitations you'll need an account to create dynamic QR codes. For your convenience, QR Dyanmics supports 0Auth so here's a couple of buttons:
        </p>
        <button class="my-2 flex w-64 text-center google">
            <Icon class="mr-4" name="google" size="16"></Icon>
            Google
        </button>
        <button class="my-2 flex w-64 text-center facebook">
            <Icon class="mr-4" name="facebook" size="16"></Icon>
            Facebook
        </button>
        <button class="my-2 flex w-64 text-center github">
            <Icon class="mr-4" name="github" size="16"></Icon>
            Github
        </button>
    </div>
</template>

<style lang="sass" scoped >
    .google
        background: #ea4335
    .facebook
        background: #4267b2
    .github
        background: #24292e
</style>

<script>
    export default {
        data() {
            return {
                styling: ''
            }
        },
        methods: {
            decideHowToRender() {
                if (window.innerWidth < 992) {
                    // We're on a mobile device and the UI is stacked
                    this.styling = 'small-modal'
                    return
                }
                this.styling = 'regular'
            }
        },
        mounted() {
            this.decideHowToRender()
            window.addEventListener('resize', this.decideHowToRender)
        }
    }
</script>
