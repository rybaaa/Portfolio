import React from 'react';
import s from './Nav.module.scss'
import home from '../../assets/img/home.svg'
import skills from '../../assets/img/skills.svg'
import projects from '../../assets/img/projects.svg'
import contact from '../../assets/img/contact.svg'
import {NavRef} from "./NavRef";

export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <NavRef src={home} text = 'Main'/>
            <NavRef src={skills} text = 'Skills'/>
            <NavRef src={projects} text = 'Projects'/>
            <NavRef src={contact} text = 'Contacts'/>
        </div>
    );
};

