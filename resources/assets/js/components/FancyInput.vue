<template>
    <div class="flex flex-col">
        <label :for="name" class="label mb-2" v-if="label">{{ label }}</label>
        <input type="text" :name="name" class="fancy-input bg-white rounded shadow px-4 py-2">
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                default: false
            },
            label: {
                default: false
            }
        }
    }
</script>
