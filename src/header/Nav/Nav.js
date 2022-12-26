import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <a href='#'>Main</a>
            <a href='#'>Skills</a>
            <a href='#'>Projects</a>
            <a href='#'>Contacts</a>
        </div>
    );
};

