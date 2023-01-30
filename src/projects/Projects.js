import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";
import todoImg from '../assets/img/todolist.jpg'
import socNetImg from '../assets/img/social-network.jpg'
import flashcardsImg from '../assets/img/flashcards.jpeg'
import Fade from 'react-reveal/Fade';



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
        <div id='projects' className={s.wrapper}>
            <div className={s.projectsBlock}>
                <Title title={'Projects'} text = {'VISIT MY GITHUB AND KEEP YOUR FEEDBACK'}/>
                <Fade left>
                    <div className={s.allProjectsBlock}>
                        <Project style = {flashcards} title = {'FlashCards'} link={'https://github.com/tkachiko/flashcards'} description={'Open-source start-up project using React-hooks, Redux Toolkit, Axios and Rest API'}/>
                        <Project style = {todo} title = {'Todolist'} link={'https://github.com/rybaaa/ToDoList'} description={'Project for your daily and work duties using React-hooks, Redux, Axios and Rest API'}/>
                        <Project style = {socNet} title = {'Social Network'} link={'https://github.com/rybaaa/social-network'}  description={'Developers social network. Many features still in progress. But you can use base functions'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

