import React from 'react';
import s from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.skillImg}>
                <img src={props.img}/>
            </div>
            <h4>{props.title}</h4>
        </div>
    );
};

