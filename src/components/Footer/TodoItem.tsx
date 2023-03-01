import React from 'react';
import s from './TodoItem.module.css'
import {useAppDispatch} from "../../hooks";
import {toggleComplete} from "../../store/todoSlice";


interface TodoItem {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    index: number,
    setModal: any,
    setTitle: any,
    setDescription: any,
    setStatus: any,
}

export const TodoItem: React.FC<TodoItem> = ({
                                                 id,
                                                 title,
                                                 setTitle,
                                                 setStatus,
                                                 setDescription,
                                                 setModal,
                                                 completed,
                                                 index,
                                                 description
                                             }) => {
    const dispatch = useAppDispatch();
    return (

        <div className={s.block} onClick={() => {
            setModal(true);
            setTitle(title);
            setDescription(description);
            setStatus(completed)
        }}>
            <div className={s.index__block}>
                <div className={s.index}>{index + 1}</div>
            </div>
            <div className={s.block__title__1}>
                <div className={s.title1}>{title.length > 6 ? title.slice(0, 6) + '...' : title}</div>
            </div>
            <div>
                <div>{description.length > 6 ? description.slice(0, 6) + '...' : description}</div>
            </div>
            <div className={s.block__input}  onClick={() =>  setModal(false)}>
                <input
                    type='checkbox'
                    className={s.input}
                    checked={completed}
                    onChange={() => dispatch(toggleComplete(id))}

                />
            </div>
        </div>

    );
};

