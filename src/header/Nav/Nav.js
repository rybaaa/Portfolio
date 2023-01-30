import React from 'react';
import s from './Nav.module.scss'
import home from '../../assets/img/home.svg'
import skills from '../../assets/img/skills.svg'
import projects from '../../assets/img/projects.svg'
import contact from '../../assets/img/contact.svg'
import {NavRef} from "./NavRef";
import {Link} from 'react-scroll'


export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <Link activeClass={s.active}
                  to="main"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-65}
                  duration={1000}
                  delay={300}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}>
                <NavRef src={home} text='Main'/>
            </Link>
            <Link activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-60}
                  duration={1000}
                  delay={300}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}>
                <NavRef src={skills} text='Skills'/>
            </Link>
            <Link activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-60}
                  duration={1000}
                  delay={300}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}>
                <NavRef src={projects} text='Projects'/>
            </Link>
            <Link activeClass={s.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-60}
                  duration={1000}
                  delay={300}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}>
                <NavRef id='#contacts' src={contact} text='Contacts'/>
            </Link>
        </div>
    );
};

