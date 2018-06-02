<template>
    <div class="fancy-checkbox flex items-center cursor-pointer" @click="toggle">
        <svg class="mr-2 text-grey-darkest" :class="checked ? 'checked' : 'unchecked'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/><path d="M4.3 7.3L7 10l4.7-4.7" fill="none" stroke="#fff" stroke-width="1.98" id="tick"/></svg>
        <label class="label mb-0 select-none cursor-pointer">
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        model: {
            event: 'change',
            prop: 'value'
        },
        data() {
            return {
                checked: false
            }
        },
        methods: {
            toggle() {
                this.checked = ! this.checked
                this.$emit('change', this.checked)
            }
        }
    }
</script>
