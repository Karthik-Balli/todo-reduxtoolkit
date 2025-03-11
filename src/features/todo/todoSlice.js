import { createSlice, nanoid } from '@reduxjs/toolkit';

const intialState = {
    todos : [{
        id: 1,
        text: "Hola text"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    intialState,
    reducers: {
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)
        }
    }
})

export const { addToDo, removeToDo } = todoSlice.actions;

export default todoSlice.reducer;