const URL = 'https://60dd76fb878c890017fa28b4.mockapi.io/todos/v1/'

export default {
    fetchData: async () => {
        const todos = await fetch(`${URL}/todos`)
            .then(response => response.json())
        return todos;
    },
    uploadData: async (data) => {
        const response = await fetch(`${URL}/todos`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    },
    toggle: async (id, data) => {
        const response = await fetch(`${URL}/todos/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    },
    destroy: async (id) => {
        const response = await fetch(`${URL}/todos/${id}`,{
            method: 'DELETE',
        });
        return response.json();
    },
    editTodo: async (id, data) => {
        const response = await fetch(`${URL}/todos/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    }
}