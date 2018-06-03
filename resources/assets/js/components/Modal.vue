<template>
    <transition name="modal">
        <div class="modal" v-show="show">
            <div class="modal-mask" @click="$emit('close')">
                <div class="modal-container" :class="size" @click.stop>
                    <div class="header">
                        <slot name="heading">
                        </slot>
                    </div>
                    <div class="body">
                        <slot name="body">
                        </slot>
                    </div>
                    <div class="footer">
                        <slot name="footer">
                            <button class="flat" @click="$emit('close')">Close</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['show', 'size']
    }
</script>
