import React, {useState} from 'react';
import {useAppDispatch} from "./hooks";
import {TodoForm} from "./components/Main/TodoForm";
import {TodoList} from "./components/TodoList/TodoList";
import {addTodo} from "./store/todoSlice";
import {Title} from "./components/Title/Title";


export const App: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false)
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (title.trim().length) {
            dispatch(addTodo({title, description}));
            setTitle('');
            setDescription('');
        }
    };


    return (
        <div>
            <TodoForm
                valueTitle={title}
                valueDescription={description}
                updateTitle={setTitle}
                updateDescription={setDescription}

                handleAction={handleAction}
            />
            <Title/>
            <TodoList
                title={title}
                description={description}/>
        </div>
    );
};


