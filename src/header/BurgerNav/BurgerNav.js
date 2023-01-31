import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {Link} from 'react-scroll'


export const BurgerNav = () => {
    const [burgerIsActive, setBurgerIsActive] = useState(false)
    const changeBurgerHandler = () => {
        setBurgerIsActive(prevState => !prevState)
    }
    return (
        <div className={s.navBlock}>
            <div className={burgerIsActive?`${s.burgerItems} ${s.show}`:`${s.burgerItems}`}>
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
                    Main
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
                    Skills
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
                    Projects
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
                    Contacts
                </Link>
            </div>
            <div onClick={changeBurgerHandler} className={burgerIsActive? `${s.closeBtn}`: `${s.burgerBtn}`}>
                <div className={s.burgerBtnItems}></div>
            </div>
        </div>
    );
};

