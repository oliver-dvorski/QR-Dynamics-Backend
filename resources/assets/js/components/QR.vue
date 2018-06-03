<template>
    <div class="flex flex-col items-center">
        <canvas id="main-code"></canvas>
        <button class="raised big mt-4" @click="showModal = true">Export</button>
        <Modal :show="showModal" @close="showModal = false" size="sm">
            <div slot="body">
                <canvas id="export-preview"></canvas>
                <div class="flex">
                    <FancyInput class="mr-4" label="Foreground" type="color" v-model="fg"></FancyInput>
                    <FancyInput label="Background" type="color" v-model="bg"></FancyInput>
                </div>
                <div class="flex">
                    <FancyInput class="w-full mr-4" label="Padding" type="number" v-model="padding"></FancyInput>
                    <FancyInput class="w-full" label="Size" type="number" max="10000" v-model="size"></FancyInput>
                </div>
            </div>
            <div slot="footer">
                <button class="flat mr-2" @click="showModal = false">Cancel</button>
                <a class="button flat" :href="dataURL" download="QR Dynamics Code.png">Export</a>
            </div>
        </Modal>
    </div>
</template>

<script>
    import QRious from 'qrious'

    export default {
        props: {
            string: { default: '' }
        },
        data() {
            return {
                mainCode: {},
                exportPreview: {},
                fg: '#000000',
                bg: '#f8fafc',
                padding: 10,
                showModal: false,
                size: 350,
                dataURL: ''
            }
        },
        watch: {
            string() {
                this.mainCode.value = this.string
                this.exportPreview.value = this.string
                this.dataURL = this.exportPreview.toDataURL()
            },
            fg() {
                this.mainCode.foreground = this.fg
                this.exportPreview.foreground = this.fg
                this.dataURL = this.exportPreview.toDataURL()
            },
            bg() {
                this.mainCode.background = this.bg
                this.exportPreview.background = this.bg
                this.dataURL = this.exportPreview.toDataURL()
            },
            padding() {
                this.mainCode.padding = this.padding
                this.exportPreview.padding = this.padding
                this.dataURL = this.exportPreview.toDataURL()
            },
            size() {
                this.mainCode.size = this.size
                this.exportPreview.size = this.size
                this.dataURL = this.exportPreview.toDataURL()
            },
        },
        mounted() {
            this.mainCode = new QRious({
                element: this.$el.querySelector('canvas#main-code'),
                value: this.string,
                size: this.size,
                foreground: this.fg,
                background: this.bg,
            })

            this.exportPreview = new QRious({
                element: this.$el.querySelector('canvas#export-preview'),
                value: this.string,
                size: this.size,
                foreground: this.fg,
                background: this.bg,
            })

            this.dataURL = this.exportPreview.toDataURL()
        }
    }
</script>

<style lang="sass" scoped>
    canvas
        width: 350px
        max-width: 100%
    button.big
        width: 350px
        max-width: 100%
</style>
