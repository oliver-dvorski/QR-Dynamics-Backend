<template>
  <transition name="modal">
    <div
      v-show="show"
      class="modal">
      <div
        class="modal-mask"
        @click="$emit('close')">
        <div
          :class="size"
          class="modal-container"
          @click.stop>
          <div class="header">
            <slot name="heading"/>
          </div>
          <div class="body">
            <slot name="body"/>
          </div>
          <div class="footer">
            <slot name="footer">
              <button
                class="flat"
                @click="$emit('close')">Close</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>
