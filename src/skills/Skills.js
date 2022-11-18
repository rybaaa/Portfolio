import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import htmlLogo from '../assets/img/icon-html.svg'
import jsLogo from '../assets/img/js_logo.svg'
import reactLogo from '../assets/img/react-svgrepo-com.svg'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <h2>Skills</h2>
            <div className={s.allSkillsBlock}>
                <Skill title = {'HTML/CSS'} img={htmlLogo} description={'Information would be added.Information would be added.Information would be added.Information would be added.'}/>
                <Skill title = {'JS/TS'} img={jsLogo} description={'Information would be added.Information would be added.Information would be added.Information would be added.Information would be added.'}/>
                <Skill title = {'React/Redux'} img={reactLogo} description={'Information would be added.'}/>
            </div>
        </div>
    );
};

