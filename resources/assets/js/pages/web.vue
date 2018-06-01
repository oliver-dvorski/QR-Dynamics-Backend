<template>
    <div class="my-8">
        <div class="flex flex-col lg:flex-row">
            <div class="md:mr-8 md:max-w-1/2">
                <Segments class="mb-4" v-model="codeType" :segments="['Static', 'Dynamic']">
                </Segments>
                <FancyInput label="Link" class="mb-2" v-model="link" placeholder="https://oliverdvorski.com"></FancyInput>
                <FancyInput label="Name" class="mb-2" :disabled="codeType == 'Static'"></FancyInput>
                <FancyInput label="Description (optional)" type="textarea" class="mb-2" :disabled="codeType == 'Static'"></FancyInput>
            </div>
            <div>
                <QR class="mt-4 lg:mt-0" :string="link" v-if="codeType == 'Static'"></QR>
                <transition name="small-modal">
                    <AuthMessage v-show="codeType != 'Static'"></AuthMessage>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import AuthMessage from './partials/0AuthMessage'

    export default {
        data() {
            return {
                link: '',
                codeType: 'Static'
            }
        },
        components: { AuthMessage }
    }
</script>
