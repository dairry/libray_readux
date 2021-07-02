import html from "../lib/core.js";
import {connect} from "../lib/store.js";

const TodoItem = ({todo, editIndex}) => {

    return html`
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class 'editing' when editing and 'completed' when marked as completed 'checked' -->
        <li 
            class="${todo.completed && 'completed'} 
                ${parseInt(todo.id) === editIndex && 'editing'}"
        >
            <div class="view">
                <input 
                    class="toggle" 
                    type="checkbox" 
                    ${todo.completed && 'checked'}
                    onchange="dispatch('toggle', ${todo.id})"
                >
                <label
                    ondblclick="dispatch('startEdit', ${todo.id})"
                >${todo.title}</label>
                <button 
                    class="destroy"
                    onclick="dispatch('destroy', ${todo.id})"
                ></button>
            </div>
            <input 
                class="edit" 
                value="${todo.title}"
                onkeyup="
                    if(event.keyCode === 13) {dispatch('endEdit', this.value.trim())}
                    else if(event.keyCode === 27) {dispatch('cancelEdit')}
                "
                onblur="
                    dispatch('endEdit', this.value.trim())
                "
            >
        </li>
    `
}

export default connect()(TodoItem)
