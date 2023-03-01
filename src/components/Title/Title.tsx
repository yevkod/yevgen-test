import React from 'react';
import s from './Title.module.css';

export const Title:React.FC = () => {
    return (
            <div className={s.block__feature}>
                <div className={s.block__id}>
                    <div className={s.id}>ID</div>
                </div>
                <div className={s.block__title}>
                    <div className={s.title}>Title</div>
                </div>
                <div className={s.block__description}>
                    <div className={s.description}>Description</div>
                </div>
                <div className={s.block__status}>
                    <div className={s.status}>Status</div>
                </div>
        </div>
    );
};


