<template>
  <div class="my-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:mr-8 w-full lg:w-auto">
        <FancyInput 
          :placeholder="poem" 
          v-model="text" 
          label="Text" 
          class="w-full" 
          type="textarea"/>
      </div>
      <div>
        <QR 
          :string="text" 
          class="mt-8"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      poem:
`In what distant deeps or skies.
Burnt the fire of thine eyes?
On what wings dare he aspire?
What the hand, dare seize the fire?`
    }
  }
}
</script>
