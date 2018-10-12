<template>
  <div :class="styling">
    <p class="leading-normal mb-4">
      Due to technical limitations you'll need an account to create dynamic QR codes. For your convenience, QR Dyanmics supports OAuth so here's a couple of buttons:
    </p>
    <button 
      disabled 
      class="raised my-2 flex w-64 text-center google">
      <Icon 
        class="mr-4" 
        name="google" 
        size="16"/>
      Google*
    </button>
    <button 
      disabled 
      class="raised my-2 flex w-64 text-center facebook">
      <Icon 
        class="mr-4" 
        name="facebook" 
        size="16"/>
      Facebook*
    </button>
    <a 
      :href="`${appUrl}/login/github`" 
      class="button raised my-2 flex w-64 text-center github" 
      @click="$store.commit('loading', true)">
      <Icon 
        class="mr-4" 
        name="github" 
        size="16"/>
      Github
    </a>
    <p class="leading-normal">* I'm still adding support for all of these services, at the moment Github is the only service integrated.</p>
    <loader :condition="$store.getters['loading']"/>
  </div>
</template>

<style lang="sass" scoped >
    .google
        background: #ea4335
        &:hover
            background: #BC352B
    .facebook
        background: #4267b2
        &:hover
            background: #34538E
    .github
        background: #24292e
        &:hover
            background: #505358
</style>

<script>
export default {
  data() {
    return {
      styling: ''
    }
  },
  mounted() {
    this.decideHowToRender()
    window.addEventListener('resize', this.decideHowToRender)
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
}
</script>
