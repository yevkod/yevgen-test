import React, {useState} from 'react';
import {useAppSelector} from "../../hooks";
import {TodoItem} from "../Footer/TodoItem";
import s from './TodoList.module.css'

interface TodoList {
    title: any,
    description: any,
}

export const TodoList: React.FC<TodoList> = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState(false);
    const todos = useAppSelector(state => state.todos.list)
    console.log('todos', todos)
    return (
        <div>
            {todos.map((todo: any, index) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    index={index}
                    setModal={setModal}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setStatus={setStatus}
                />
            ))}
            <div>
                {modal ? <div className={s.block}>
                    <div>
                        <div>
                            Title:
                            {title}
                        </div>
                        <div>
                            Description:
                            {description}
                        </div>
                        <div>
                            Status:
                            <input
                                type='checkbox'
                                checked={status}
                            />
                        </div>
                        <div className={s.block__button}>
                            <button className={s.button} onClick={() => setModal(false)}>Close</button>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>
    );
};

