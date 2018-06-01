<template>
    <div class="my-8">
        <div class="flex flex-col md:flex-row">
            <div class="md:mr-8 md:max-w-1/2">
                <Segments class="mb-4" v-model="codeType" :segments="['Static', 'Dynamic']">
                </Segments>
                <FancyInput label="Link" class="mb-2" v-model="link" placeholder="https://oliverdvorski.com"></FancyInput>
                <FancyInput label="Name" class="mb-2" :disabled="codeType == 'Static'"></FancyInput>
                <FancyInput label="Description (optional)" type="textarea" class="mb-2" :disabled="codeType == 'Static'"></FancyInput>
            </div>
            <div>
                <QR :string="link" v-if="codeType == 'Static'"></QR>
                <div v-else >
                    <p class="leading-normal mb-4">
                        Due to technical limitations you'll need an account to create dynamic QR codes. For your convenience, QR Dyanmics supports 0Auth so here's a couple of buttons:
                    </p>
                    <button class="my-2 flex w-64 text-center google">
                        <Icon class="mr-4" name="google" size="16"></Icon>
                        Google
                    </button>
                    <button class="my-2 flex w-64 text-center facebook">
                        <Icon class="mr-4" name="facebook" size="16"></Icon>
                        Facebook
                    </button>
                    <button class="my-2 flex w-64 text-center github">
                        <Icon class="mr-4" name="github" size="16"></Icon>
                        Github
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: '',
                codeType: 'Static'
            }
        }
    }
</script>

<style lang="sass" scoped >
    .google
        background: #ea4335
    .facebook
        background: #4267b2
    .github
        background: #24292e
</style>
