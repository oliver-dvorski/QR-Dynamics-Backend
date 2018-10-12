<template>
  <div class="my-8">
    <div class="flex flex-col lg:flex-row">
      <div class="md:mr-8 md:max-w-1/2">
        <form
          method="POST"
          @submit.prevent="saveCode">
          <label class="label mb-2 mt-4 block">Code type</label>
          <Segments
            v-model="codeType"
            :segments="['Static', 'Dynamic']"
          />
          <FancyInput
            v-model="redirect"
            :trim="true"
            label="Link"
            placeholder="https://oliverdvorski.com"
          />
          <FancyInput
            v-model="name"
            :disabled="!allowDynamic"
            label="Name"
          />
          <FancyInput
            v-model="description"
            :disabled="!allowDynamic"
            label="Description (optional)"
            type="textarea"
            @keydown.ctrl.enter.native="saveCode"
          />
          <transition name="fade">
            <button
              v-show="codeType == 'Dynamic'"
              class="raised mt-2">Save</button>
          </transition>
        </form>
      </div>
      <div :class="codeType == 'Dynamic' ? 'w-full' : null">
        <QR
          v-if="codeType == 'Static'"
          :string="redirect"
          class="mt-8"/>
        <transition
          v-if="user == false"
          name="small-modal">
          <OAuthMessage v-show="codeType != 'Static'"/>
        </transition>
        <dynamicCodeList v-show="codeType == 'Dynamic' && user != false"/>
      </div>
    </div>
  </div>
</template>

<script>
import OAuthMessage from './partials/OAuthMessage'
import dynamicCodeList from './partials/dynamicCodeList'
import eventBus from '../eventBus'

import { mapGetters } from 'vuex'

export default {
  components: { OAuthMessage, dynamicCodeList },
  data() {
    return {
      redirect: '',
      name: '',
      description: '',
      dynamicLink: '',
      codeType: 'Static',
      showModal: true
    }
  },
  computed: {
    allowDynamic() {
      return this.codeType == 'Dynamic' && this.user != false
    },
    ...mapGetters ('auth', [ 'user' ])
  },
  methods: {
    saveCode() {
      if (this.redirect !== '' && this.name !== '') {
        eventBus.$emit('dynamicCodeAdded', {
          redirect: this.redirect,
          name: this.name,
          description: this.description
        })
        this.redirect = ''
        this.name = ''
        this.description = ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('web/fetchCodeList')
  }
}
</script>
