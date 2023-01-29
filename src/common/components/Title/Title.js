import React from 'react';
import s from './Title.module.scss'
import Flip from 'react-reveal/Flip';


export const Title = (props) => {
    return (
        <div className={s.wrapper}>
            <Flip top>
                <span className={s.text}>{props.text}</span>
                <h2 className={s.title}>{props.title}</h2>
            </Flip>

        </div>
    );
};

