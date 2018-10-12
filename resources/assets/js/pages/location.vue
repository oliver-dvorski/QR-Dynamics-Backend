<template>
  <div class="my-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:mr-8 w-full lg:w-auto">
        <FancyInput 
          v-model="lat" 
          label="Latitude" 
          class="w-full" 
          type="number" 
          min="-90" 
          max="90" 
          placeholder="contact@oliverdvorski.com"/>
        <FancyInput 
          v-model="long" 
          label="Longitude" 
          class="w-full" 
          type="number" 
          min="-180" 
          max="180" 
          placeholder="Heads or tails?"/>
      </div>
      <div>
        <QR 
          :string="emailCode" 
          class="mt-8"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lat: '45.813228',
      long: '15.973339'
    }
  },
  computed: {
    emailCode() {
      return `geo:${this.lat},${this.long},400`
    }
  }
}
</script>
