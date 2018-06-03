<template>
    <div class="flex flex-col items-center">
        <canvas></canvas>
        <button class="raised mt-4">Export</button>
    </div>
</template>

<script>
    import QRious from 'qrious'

    export default {
        props: {
            string: { default: '' },
            size: { default: 350 }
        },
        data() {
            return {
                qr: {},
                fg: '#000000',
                bg: '#f8fafc'
            }
        },
        watch: {
            string() {
                this.qr.value = this.string
            },
            fg() {
                this.qr.foreground = this.fg
            },
            bg() {
                this.qr.background = this.bg
            }
        },
        mounted() {
            this.qr = new QRious({
                element: this.$el.querySelector('canvas'),
                value: this.string,
                size: this.size,
                foreground: this.fg,
                background: this.bg,
            })
        }
    }
</script>

<style lang="sass" scoped>
    canvas
        width: 350px
        height: 350px
        max-width: 100%
    button
        width: 350px
        max-width: 100%
</style>
