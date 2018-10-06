import eventBus from './eventBus'

function flash (message) {
    eventBus.$emit('flash', message)
}

export { flash }
