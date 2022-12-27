import React from 'react';
import s from './Main.module.scss'
import photo from '../assets/img/cute-cat.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.info}>
                <h2>Anton Rybak</h2>
                <h3>from Minsk</h3>
            </div>
            <div className={s.profile}>
                <div className={s.about}>
                    <h2>About Me</h2>
                    <p>Front-End Developer with a proven
                        ability to collaborate effectively with
                        senior developers while spending
                        extra time to be mentored. Enjoy
                        working closely with team members
                        to ensure workloads are effectively
                        redirected to bottlenecks and
                        personally picking up the slack when
                        necessary. With a passion for both
                        personal growth and for software
                        development, I attended a 1000+ hour
                        coding bootcamp to learn new
                        languages while sharpening existing
                        skills. Ready to apply my passion for
                        coding to a talented engineering
                        team to develop quality solutions.
                    </p>
                </div>
                <div className={s.img}>
                    <img src={photo} alt={'my-photo'}/>
                </div>

            </div>


        </div>
    );
};

