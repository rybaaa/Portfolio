import React from 'react';
import s from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={s.skillBlock}>
            <div><img src={props.img}/></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

