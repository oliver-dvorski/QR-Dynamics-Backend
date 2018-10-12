<template>
  <div>
    <div
      v-show="dyanmicCodeList.length == 0"
      class="mt-8 flex items-center">
      <h3 class="font-normal text-grey-dark">Your dynamic codes will show up here</h3>
    </div>
    <ul class="dynamic-code-list list-reset">
      <li
        v-for="(code, index) in dyanmicCodeList"
        :key="index"
        class="list-item flex flex-col bg-white rounded cursor-pointer shadow hover:shadow-lg p-4"
        @click="openModal(code, index)">
        <figure>
          <QR
            :string="getQrCodeLocation(code)"
            :should-export="false"/>
        </figure>
        <main class="mt-4">
          <h3 class="font-medium truncate">{{ code.name }}</h3>
          <p
            class="text-sm mt-2 truncate text-brand"
            @click.stop><a
              :href="code.redirect"
              target="_blank">{{ code.redirect }}</a></p>
        </main>
      </li>
    </ul>

    <Modal
      :show="editModal"
      @close="editModal = false">
      <h2 slot="heading">Edit Dynamic QR Code</h2>
      <div slot="body">
        <form @submit.prevent="updateCode">
          <input
            type="submit"
            class="hidden">
          <FancyInput
            v-model="editing.redirect"
            label="Link"/>
          <FancyInput
            v-model="editing.name"
            label="Name"/>
          <FancyInput
            v-model="editing.description"
            label="Description"
            type="textarea"
            @keydown.ctrl.enter.native="updateCode"/>
        </form>
      </div>
      <div
        slot="footer"
        class="flex-wrap">
        <button
          class="flat danger mr-2"
          @click="openWarningModal">Delete</button>
        <div class="flex-1"/>
        <button
          class="flat mr-2"
          @click="updateCode">Save</button>
        <button
          class="flat"
          @click="editModal = false">Close</button>
      </div>
    </Modal>

    <Modal
      :show="warningModal"
      @close="warningModal = false">
      <h2 slot="heading">Are you sure?</h2>
      <div slot="body">
        You're about to delete a dynamic QR Code. All data related to that code will be deleted. If you have shared the code with someone, that code will stop working. This action cannot be undone.
      </div>
      <div slot="footer">
        <button
          class="flat danger mr-2"
          @click="deleteCode">Delete it</button>
        <button
          class="flat"
          @click="closeWarningModal">Cancel</button>
      </div>
    </Modal>

    <loader :condition="loading"/>

  </div>
</template>

<script>
import eventBus from '../../eventBus'
import { mapGetters } from 'vuex'

export default {
  prop: [],
  data () {
    return {
      editing: {},
      editModal: false,
      warningModal: false
    }
  },
  computed: {
    ...mapGetters ({
      dyanmicCodeList: 'web/dyanmicCodeList',
      loading: 'loading'
    })
  },
  mounted () {
    eventBus.$on('dynamicCodeAdded', (code) => {
      this.$store.dispatch('web/new', code)
    })
  },
  methods: {
    getQrCodeLocation (code) {
      return this.shortCodeLocation + '/' + code.link
    },
    openModal (code, index) {
      this.editing = Object.assign({}, code)
      this.editing.index = index
      this.editModal = true
    },
    openWarningModal () {
      this.editModal = false
      this.warningModal = true
    },
    closeWarningModal () {
      this.warningModal = false
      this.editModal = true
    },
    updateCode () {
      this.$store.dispatch('web/update', this.editing)
      this.editModal = false
    },
    deleteCode () {
      this.$store.dispatch('web/delete', this.editing)
      this.warningModal = false
      this.editing = {}
    }
  },
}
</script>

<style lang="sass">
    .dynamic-code-list
        display: grid
        grid-gap: 1rem
        margin: 2rem 0
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

        .list-item
            transition: box-shadow .3s
</style>
