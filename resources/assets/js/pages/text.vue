<template>
    <div class="my-8">
        <div class="flex">
            <div class="md:mr-8">
                <FancyInput label="Text" type="textarea" :placeholder="poem" v-model="text"></FancyInput>
            </div>
            <div>
                <QR class="mt-8" :string="text"></QR>
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
