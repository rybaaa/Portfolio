import React from 'react';
import s from './Title.module.scss'


export const Title = (props) => {
    return (
        <div className={s.wrapper}>
            <span className={s.text}>{props.text}</span>
            <h2 className={s.title}>{props.title}</h2>
        </div>
    );
};

