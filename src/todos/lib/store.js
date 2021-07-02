import { createStore } from './core.js'
import reducer from './reducer.js'
import withLogger from '../utils/logger.js'

const { attach, connect, dispatch } = createStore(withLogger(reducer))

window.dispatch = dispatch
window.call = true

export {
    attach,
    connect
}
