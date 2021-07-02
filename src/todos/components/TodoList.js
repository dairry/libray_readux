import html from "../../../lib/core.js";
import { connect } from "../lib/store.js"
import TodoItem from "./TodoItem.js";

const TodoList = ({ todos, filters, filter }) => {

    return html`
        <section class="main">
            <input 
                id="toggle-all" 
                class="toggle-all" 
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos?.filter(filters[filter]).map(todo => TodoItem({todo}))}
            </ul>
        </section>
    `
}

export default connect()(TodoList)
