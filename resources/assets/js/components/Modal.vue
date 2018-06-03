<template>
    <transition name="modal">
        <div class="modal" v-show="show">
            <div class="modal-mask">
                <div class="modal-container">
                    <div slot="header" class="header">
                        <h2>Heading</h2>
                    </div>
                    <div slot="body" class="body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo sed numquam excepturi. Debitis ipsum, corporis iusto rem pariatur est, assumenda blanditiis et voluptatem vitae, cumque culpa adipisci veritatis incidunt?
                    </div>
                    <div slot="footer" class="footer">
                        <button class="flat" @click="$emit('close')">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['show']
    }
</script>
