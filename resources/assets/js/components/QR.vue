<template>
    <canvas></canvas>
</template>

<script>
    import QRious from 'qrious'

    export default {
        props: {
            string: { default: '' },
            size: { default: 300 }
        },
        data() {
            return { qr: {} }
        },
        watch: {
            string() {
                this.qr.value = this.string
            }
        },
        mounted() {
            this.qr = new QRious({
                element: this.$el,
                value: this.string,
                size: this.size
            })
        }
    }
</script>
