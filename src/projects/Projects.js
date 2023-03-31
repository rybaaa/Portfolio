import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";
import todoImg from '../assets/img/todolist.jpg'
import socNetImg from '../assets/img/social-network.jpg'
import flashcardsImg from '../assets/img/flashcards.jpeg'
import reposImg from '../assets/img/gitgraph.png'
import oswaImg from '../assets/img/oswa.png'
import Fade from 'react-reveal/Fade';
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import '../projects/slider.css'
import {Pagination, EffectCoverflow} from "swiper";


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
    const repos = {
        backgroundImage: `url(${reposImg})`
    }
    const oswaShop = {
        backgroundImage: `url(${oswaImg})`
    }
    return (
        <div id='projects' className={s.wrapper}>
            <div className={s.projectsBlock}>
                <Title title={'Projects'} text={'VISIT MY GITHUB AND KEEP YOUR FEEDBACK'}/>
                <Fade left>
                    <div className={s.allProjectsBlock}>
                        <Project style={flashcards} title={'FlashCards'} link={'https://github.com/rybaaa/flashcards'}
                                 description={'Open-source start-up project for learning words and other fields of studying using React-hooks, Redux Toolkit, Axios and Rest API'}/>
                        <Project style={repos} title={'Searching of GitHub repositories'}
                                 link={'https://github.com/rybaaa/Repos-with-GitHub-GraphQL'}
                                 description={'Project with searching of github repositories, its issues and comments using JavaScript, Vue, Vuex, GraphQL, Axios'}/>
                        <Project style={oswaShop} title={'Oswa shopping'}
                                 link={'https://github.com/rybaaa/Oswa-shopping'}
                                 description={'E-shop with various types of product. Full-stack application. Front-end: Typescript/React, Back-end: Express.js. Many features still in progress'}/>
                        <Project style={todo} title={'Todolist'} link={'https://github.com/rybaaa/React-Todolist'}
                                 description={'Project for your daily and work duties using React-hooks, Redux, Axios and Rest API'}/>
                        <Project style={socNet} title={'Social Network'}
                                 link={'https://github.com/rybaaa/social-network'}
                                 description={'Developers social network. Many features still in progress. But you can use base functions'}/>
                    </div>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className={s.mySwiper}
                    >
                        <SwiperSlide> <Project style={flashcards} title={'FlashCards'}
                                               link={'https://github.com/rybaaa/flashcards'}
                                               description={'Open-source start-up project for learning words and other fields of studying using React-hooks, Redux Toolkit, Axios and Rest API'}/>
                        </SwiperSlide>
                        <SwiperSlide><Project style={repos} title={'Searching of GitHub repositories'}
                                              link={'https://github.com/rybaaa/Repos-with-GitHub-GraphQL'}
                                              description={'Project with searching of github repositories, its issues and comments using JavaScript, Vue, Vuex, GraphQL, Axios'}/></SwiperSlide>
                        <SwiperSlide><Project style={oswaShop} title={'Oswa shopping'}
                                              link={'https://github.com/rybaaa/Oswa-shopping'}
                                              description={'E-shop with various types of product. Full-stack application. Front-end:Typescript/React, Back-end: Express.js. Many features still in progress'}/></SwiperSlide>
                        <SwiperSlide><Project style={todo} title={'Todolist'} link={'https://github.com/rybaaa/React-Todolist'}
                                              description={'Project for your daily and work duties using React-hooks, Redux, Axios and Rest API'}/></SwiperSlide>
                        <SwiperSlide><Project style={socNet} title={'Social Network'}
                                              link={'https://github.com/rybaaa/social-network'}
                                              description={'Developers social network. Many features still in progress. But you can use base functions'}/></SwiperSlide>
                    </Swiper>
                </Fade>
            </div>
        </div>
    );
};

