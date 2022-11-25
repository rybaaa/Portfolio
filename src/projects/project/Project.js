import React from 'react';
import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.logoBlock}>
                <a href={props.link}><img src={props.img}/></a>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

