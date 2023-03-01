import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    id: any,
    title: string,
    description: string,
    completed: boolean
}

type TodosState = {
    list: Todo[],
}

const initialState: TodosState = {
    list: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<any>) {
            console.log('action.payload',action.payload)
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
    },
});

export const {addTodo, toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;

