import React from 'react';
import s from './TodoForm.module.css'

interface TodoForm {
    valueTitle: string,
    valueDescription: string,
    updateTitle: (str: string) => void,
    handleAction: () => void,
    updateDescription: any,
}

export const TodoForm: React.FC<TodoForm> = ({valueTitle,valueDescription, updateTitle, handleAction, updateDescription}) => {
    return (
        <div className={s.block}>
            <div className={s.title__block}>
                <div className={s.title}>Title:</div>
                <div className={s.block__input} >
                    <input
                        className={s.input}
                        placeholder='Enter title'
                        value={valueTitle}
                        onChange={(e) => updateTitle(e.target.value)}
                        style={!valueTitle.length?{border:'1px solid red'}:{border:'1px solid green'}}
                    />
                  {!valueTitle.length?<div style={{fontSize:"10px",color:'red'}}>This field is empty</div>:''}
                </div>
                <div className={s.block__description}>
                    <div className={s.description}>Description:</div>
                </div>
                <div className={s.block__input}>
                    <input
                        className={s.input}
                        placeholder='Enter description'
                        value={valueDescription}
                        onChange={(e) => updateDescription(e.target.value)}
                    />
                    {!valueDescription.length?<div style={{fontSize:"10px",color:'red'}}>This field is empty</div>:''}
                </div>
                <div className={s.block__button}>
                    <button className={s.button} onClick={handleAction}>Create</button>
                </div>
            </div>

        </div>
    );
};

