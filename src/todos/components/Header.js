import html from "../lib/core.js"

function Header() {

    return html`
        <header class="header">
            <h1>Todo App</h1>
            <input 
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus
                onkeyup="if(event.keyCode === 13){dispatch('add', this.value.trim())}"
            >
        </header>
    `
}

export default Header
