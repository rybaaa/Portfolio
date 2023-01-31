import React from 'react';
import s from './Header.module.scss'
import {Nav} from "./Nav/Nav";
import {BurgerNav} from "./BurgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={s.headerBlock}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};

