import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title";
import todoImg from '../assets/img/todolist.jpg'
import socNetImg from '../assets/img/social-network.jpg'
import flashcardsImg from '../assets/img/flashcards.jpeg'



export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todoImg})`,
    };
    const socNet = {
        backgroundImage: `url(${socNetImg})`,
    };
    const flashcards = {
        backgroundImage: `url(${flashcardsImg})`
    }
    return (
        <div className={s.wrapper}>
            <div className={s.projectsBlock}>
                <Title title={'Projects'} text = {''}/>
                <div className={s.allProjectsBlock}>
                    <Project style = {flashcards} title = {'FlashCards'} link={'https://github.com/rybaaa'} description={'Open-source start-up project using React-hooks, Redux, Axios and Rest API'}/>
                    <Project style = {todo} title = {'Todolist'} link={'https://github.com/rybaaa'} description={'Complex project using React-hooks, Redux, Axios and Rest API'}/>
                    <Project style = {socNet} title = {'Social Network'} link={'https://github.com/rybaaa'}  description={'Developers social network. Many features still in progress. But you can use base functions of any social network'}/>
                </div>
            </div>
        </div>
    );
};

