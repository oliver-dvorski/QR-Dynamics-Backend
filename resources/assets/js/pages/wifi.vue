<template>
    <div class="my-8">
        <div class="flex flex-col md:flex-row">
            <div class="md:mr-8 w-full lg:w-auto">
                <label class="label mb-2 mt-4 block">Encryption method</label>
                <Segments :segments="['WPA', 'WEP', 'None']" v-model="encryption"></Segments>
                <FancyInput label="Network name (SSID)" type="text" v-model="ssid"></FancyInput>
                <FancyInput label="Password" type="text" v-model="password" :disabled="encryption == 'None'"></FancyInput>
                <FancyCheckbox v-model="hidden" class="mt-6">Wifi network is hidden</FancyCheckbox>
            </div>
            <div>
                <QR class="mt-8" :string="qrContent"></QR>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ssid: '',
                encryption: '',
                password: '',
                hidden: false
            }
        },
        watch: {
            encryption() {
                if (this.encryption == 'None') {
                    this.password = ''
                }
            }
        },
        computed: {
            sanitisedEncryption() {
                return this.encryption == 'None' ? 'nopass' : this.encryption
            },
            qrContent() {
                return `WIFI:T:${this.sanitisedEncryption};S:${this.ssid};P:${this.password};H:${this.hidden};`
            }
        }
    }
</script>
