<template>
    <div>
        <canvas></canvas>
        <div class="flex">
            <FancyInput class="w-full" label="Foreground colour" type="color" v-model="fg"></FancyInput>
            <div class="w-4"></div>
            <FancyInput class="w-full" label="Background colour" type="color" v-model="bg"></FancyInput>
        </div>
    </div>
</template>

<script>
    import QRious from 'qrious'

    export default {
        props: {
            string: { default: '' },
            size: { default: 300 }
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
