import React from 'react';
import s from './Main.module.css'
import photo from '../assets/img/cute-cat.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div>
                <span>Frontend Developer</span>
                <p>Hello. This information will be added</p>
            </div>
            <div>
                <img src={photo} alt={'my-photo'}/>
            </div>

        </div>
    );
};

