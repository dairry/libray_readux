import html from './lib/core.js'
import api from './utils/api.js'
import { connect } from './lib/store.js'

import Page from './components/Page.js'
import Header from './components/Header.js'
import TodoList from './components/TodoList.js'
import Footer from './components/Footer.js'

function App({todos}) {

    if (call) {
        api.fetchData()
        .then(data => {
            dispatch('fetch', data)
            return
        })
    }

    return html`
        ${Page({title: 'Todo App'})}
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)
