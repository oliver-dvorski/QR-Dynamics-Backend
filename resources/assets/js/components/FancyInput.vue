<template>
    <div class="fancy-input-container" :class="disabled ? 'disabled' : null">
        <label :for="name" class="label mb-2 mt-4" v-if="label">{{ label }}</label>
        <input
            :value="value"
            :type="type"
            v-if="type != 'textarea'"
            :name="name"
            @input="$emit('input', $event.target.value)"
            :disabled="disabled"
            :min="min"
            :max="max"
            :placeholder="placeholder"
            class="fancy-input"
            >
        <textarea
            :name="name"
            v-if="type == 'textarea'"
            class="fancy-input"
            @input="$emit('input', $event.target.value)"
            :disabled="disabled"
            :placeholder="placeholder"
            ></textarea>
    </div>
</template>

<script>
    export default {
        props: {
            value: {},
            min: { default: 0 },
            max: { default: 100 },
            placeholder: { default: '' },
            name: {
                default: false
            },
            label: {
                default: false
            },
            type: {
                default: 'text'
            },
            disabled: {
                default: false
            }
        }
    }
</script>
