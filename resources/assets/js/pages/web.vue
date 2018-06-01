<template>
    <div class="my-8">
        <div class="flex flex-col md:flex-row">
            <div class="flex-1 md:mr-8">
                <Segments class="mb-4"></Segments>
                <FancyInput label="Link" class="mb-2" v-model="link" placeholder="https://oliverdvorski.com"></FancyInput>
                <FancyInput label="Name" class="mb-2" disabled="true"></FancyInput>
                <FancyInput label="Description (optional)" type="textarea" class="mb-2" disabled="true"></FancyInput>
                <button class="my-4">Export</button>
            </div>
            <div class="pt-8 flex flex-col items-center justify-center flex-1 shadow bg-white">
                <QR :string="link"></QR>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: ''
            }
        }
    }
</script>
