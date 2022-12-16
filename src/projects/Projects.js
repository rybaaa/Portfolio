import React from 'react';
import s from './Projects.module.css'
import {Project} from "./project/Project";
import tglogo from '../assets/img/telegram-logo-svgrepo-com.svg'
import twitterlogo from '../assets/img/twitter-svgrepo-com.svg'
import {Title} from "../common/components/Title";



export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <Title title={'Projects'}/>
            <div className={s.allProjectsBlock}>
                <Project title = {'Telegram'} link={'https://telegram.org/'} img={tglogo} description={'Telegram is a cross-platform messaging service with enhanced encryption and privacy. Most messages feature client-to-server encryption, but Secret Chat messages have end-to-end encryption. Telegram also supports group chats and self-destructing messages as well.'}/>
                <Project title = {'Twitter'} link={'https://twitter.com/'} img={twitterlogo} description={'Twitter is a free social networking site where users broadcast short posts known as tweets. These tweets can contain text, videos, photos or links. To access Twitter, users need an internet connection or smart phone to use the app or website, Twitter.com.'}/>
            </div>

        </div>
    );
};

