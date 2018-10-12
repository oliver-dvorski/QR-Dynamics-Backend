<template>
  <div class="my-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:mr-8 w-full lg:w-auto">
        <label class="label mb-2 mt-4 block">Encryption method</label>
        <Segments 
          :segments="['WPA', 'WEP', 'None']" 
          v-model="encryption"/>
        <FancyInput 
          v-model="ssid" 
          label="Network name (SSID)" 
          type="text"/>
        <FancyInput 
          v-model="password" 
          :disabled="encryption == 'None'" 
          label="Password" 
          type="text"/>
        <FancyCheckbox 
          v-model="hidden" 
          class="mt-6">Wifi network is hidden</FancyCheckbox>
      </div>
      <div>
        <QR 
          :string="qrContent" 
          class="mt-8"/>
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
  computed: {
    sanitisedEncryption() {
      return this.encryption == 'None' ? 'nopass' : this.encryption
    },
    qrContent() {
      return `WIFI:T:${this.sanitisedEncryption};S:${this.ssid};P:${this.password};H:${this.hidden};`
    }
  },
  watch: {
    encryption() {
      if (this.encryption == 'None') {
        this.password = ''
      }
    }
  },
}
</script>
