import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import htmlLogo from '../assets/img/html.svg'
import cssLogo from '../assets/img/css.svg'
import jsLogo from '../assets/img/js_logo.svg'
import tsLogo from '../assets/img/js_logo.svg'
import reactLogo from '../assets/img/react-svgrepo-com.svg'
import reduxLogo from '../assets/img/redux.svg'
import postmanLogo from '../assets/img/postman.svg'
import storybookLogo from '../assets/img/storybook.svg'
import gitLogo from '../assets/img/git.svg'
import sassLogo from '../assets/img/sass.svg'
import {Title} from "../common/components/Title";

export const Skills = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.skillsBlock}>
                <Title title = {'Skills'} text={'Stack'} />
                <div className={s.allSkillsBlock}>
                    <Skill title = {'React'} img={reactLogo} />
                    <Skill title = {'Redux'} img={reduxLogo} />
                    <Skill title = {'TS'} img={tsLogo} />
                    <Skill title = {'JS'} img={jsLogo} />
                    <Skill title = {'Postman'} img={postmanLogo} />
                    <Skill title = {'Storybook'} img={storybookLogo} />
                    <Skill title = {'HTML'} img={htmlLogo} />
                    <Skill title = {'CSS'} img={cssLogo} />
                    <Skill title = {'Sass/Less'} img={sassLogo} />
                    <Skill title = {'Git'} img={gitLogo} />
                </div>
            </div>
        </div>
    );
};

