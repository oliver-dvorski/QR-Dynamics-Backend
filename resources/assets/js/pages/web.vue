<template>
    <div class="my-8">
        <div class="flex flex-col lg:flex-row">
            <div class="md:mr-8 md:max-w-1/2">
                <label class="label mb-2 mt-4 block">Code type</label>
                <Segments v-model="codeType" :segments="['Static', 'Dynamic']">
                </Segments>
                <FancyInput label="Link" v-model="link" placeholder="https://oliverdvorski.com"></FancyInput>
                <FancyInput label="Name" :disabled="codeType == 'Static'"></FancyInput>
                <FancyInput label="Description (optional)" type="textarea" :disabled="codeType == 'Static'"></FancyInput>
            </div>
            <div>
                <QR class="mt-8" :string="link" v-if="codeType == 'Static'"></QR>
                <transition name="small-modal" v-if="user == null">
                    <OAuthMessage v-show="codeType != 'Static'"></OAuthMessage>
                </transition>
                <QR class="mt-8" :string="dynamicLink" v-if="codeType == 'Dynamic'"></QR>
            </div>
        </div>
    </div>
</template>

<script>
    import OAuthMessage from './partials/OAuthMessage'

    export default {
        data() {
            return {
                link: '',
                dynamicLink: '',
                codeType: 'Static',
                showModal: true,
                user: null
            }
        },
        watch: {
            codeType() {
                if (this.codeType == 'Dynamic' && this.user != null) {
                    axios.get(`/api/user/${this.user.email}/new-code`).then(response => {
                        this.dynamicLink = response.data
                    })
                }
            }
        },
        components: { OAuthMessage },
        mounted() {
            axios.get('/api/user').then(response => {
                this.user = response.data
            })
        }
    }
</script>
