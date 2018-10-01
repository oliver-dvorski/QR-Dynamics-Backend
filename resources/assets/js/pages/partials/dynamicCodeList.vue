<template>
    <div>
        <div class="mt-8 flex items-center" v-show="dyanmicCodeList.length == 0">
            <h3 class="font-normal text-grey-dark">Your dynamic codes will show up here</h3>
        </div>
        <div class="dynamic-code-list">
            <div class="list-item bg-white rounded shadow p-4" v-for="(code, index) in dyanmicCodeList">
                <img class="w-full h-auto" :src="appUrl + '/api/user/oliver.dvorski@gmail.com/new-code'" alt="QR Code">
                <div class="meta">
                    <div class="flex items-center justify-between">
                        <h3 class="font-medium">{{ code.name }}</h3>
                        <div>
                            <button class="flat" @click="openModal(code, index)">
                                <Icon name="cog" size="16" class="text-grey-darkest"></Icon>
                            </button>
                            <button class="flat" @click="openWarningModal(code, index)">
                                <Icon name="trash" size="16" class="text-grey-darkest"></Icon>
                            </button>
                        </div>
                    </div>
                    <p class="description leading-normal text-grey-darker mb-2" v-show="code.description != ''">{{ code.description }}</p>
                    <p class="text-sm link"><a target="_blank" :href="'//' + code.link">{{ code.link }}</a></p>
                </div>
            </div>
        </div>

        <Modal :show="editModal"  @close="editModal = false">
            <h2 slot="heading">Edit Dynamic QR Code</h2>
            <div slot="body">
                <form @submit.prevent="updateCode">
                    <FancyInput label="Link" v-model="editing.link"></FancyInput>
                    <FancyInput label="Name" v-model="editing.name"></FancyInput>
                    <FancyInput label="Description" type="textarea" v-model="editing.description" @keydown.ctrl.enter.native="updateCode"></FancyInput>
                </form>
            </div>
            <div slot="footer">
                <button class="flat mr-2" @click="updateCode">Save</button>
                <button class="flat" @click="editModal = false">Close</button>
            </div>
        </Modal>

        <Modal :show="warningModal" @close="warningModal = false">
            <h2 slot="heading">Are you sure?</h2>
            <div slot="body">
                You're about to delete a dynamic QR Code. All data related to that code will be deleted. If you have shared the code with someone, that code will stop working. This action cannot be undone.
            </div>
            <div slot="footer">
                <button class="flat" @click="deleteCode">Delete it</button>
                <button class="flat" @click="warningModal = false">Cancel</button>
            </div>
        </Modal>

    </div>
</template>

<script>
    import eventBus from '../../eventBus'
    import { mapGetters } from 'vuex'

    export default {
        prop: [],
        data() {
            return {
                editing: {},
                editModal: false,
                warningModal: false
            }
        },
        computed: {
            ...mapGetters ('web', ['dyanmicCodeList'])
        },
        methods: {
            openModal(code, index) {
                this.editing = Object.assign({}, code)
                this.editing.index = index
                this.editModal = true
            },
            openWarningModal(code, index) {
                this.warningModal = true
                this.editing = Object.assign({}, code)
                this.editing.index = index
            },
            updateCode() {
                this.$store.commit('web/updateCode', this.editing)
                this.editModal = false
            },
            deleteCode() {
                this.$store.commit('web/deleteCode', this.editing.index)
                this.warningModal = false
                this.editing = {}
            }
        },
        mounted() {
            eventBus.$on('dynamicCodeAdded', (code) => {
                this.$store.commit('web/addCode', code)
            })
        }
    }
</script>

<style lang="sass">
    .dynamic-code-list .list-item
        display: grid
        grid-template-columns: 100px 1fr
        grid-gap: 1rem
        margin: 2rem 0

        .meta
            display: flex
            flex-direction: column

        .description
            flex: 1

        .link
            text-align: right
            margin-top: .5rem
</style>
