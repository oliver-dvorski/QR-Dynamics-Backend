<template>
    <div class="my-8">
        <div class="flex flex-col lg:flex-row">
            <div class="md:mr-8 md:max-w-1/2">
                <form @submit.prevent="saveCode" method="POST">
                    <label class="label mb-2 mt-4 block">Code type</label>
                    <Segments
                        v-model="codeType"
                        :segments="['Static', 'Dynamic']"
                    ></Segments>
                    <FancyInput
                        label="Link"
                        v-model="redirect"
                        :trim="true"
                        placeholder="https://oliverdvorski.com"
                    ></FancyInput>
                    <FancyInput
                        label="Name"
                        v-model="name"
                        :disabled="!allowDynamic"
                    ></FancyInput>
                    <FancyInput
                        label="Description (optional)"
                        v-model="description"
                        type="textarea"
                        :disabled="!allowDynamic"
                        @keydown.ctrl.enter.native="saveCode"
                    ></FancyInput>
                    <transition name="fade">
                        <button class="raised mt-2" v-show="codeType == 'Dynamic'">Save</button>
                    </transition>
                </form>
            </div>
            <div :class="codeType == 'Dynamic' ? 'w-full' : null">
                <QR class="mt-8" :string="redirect" v-if="codeType == 'Static'"></QR>
                <transition name="small-modal" v-if="user == false">
                    <OAuthMessage v-show="codeType != 'Static'"></OAuthMessage>
                </transition>
                <dynamicCodeList v-show="codeType == 'Dynamic' && user != false"></dynamicCodeList>
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
        components: { OAuthMessage, dynamicCodeList },
        mounted() {
            this.$store.dispatch('auth/fetchUser')
            this.$store.dispatch('web/fetchCodeList')
        },
        computed: {
            allowDynamic() {
                return this.codeType == 'Dynamic' && this.user != false
            },
            ...mapGetters ('auth', [ 'user' ])
        }
    }
</script>
