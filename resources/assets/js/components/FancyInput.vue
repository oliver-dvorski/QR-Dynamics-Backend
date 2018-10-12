<template>
  <div
    :class="disabled ? 'disabled' : null"
    class="fancy-input-container">
    <label
      v-if="label"
      :for="name"
      class="label mb-2 mt-4">{{ label }}</label>
    <input
      v-if="type != 'textarea'"
      :value="value"
      :type="type"
      :name="name"
      :disabled="disabled"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      class="fancy-input"
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-if="type == 'textarea'"
      :value="value"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      class="fancy-input"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [ String, Number, Date ],
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: [ String, Boolean],
      default: false
    },
    label: {
      type: [ String, Boolean],
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trim: {
      type: Boolean,
      default: false
    }
  }
}
</script>
