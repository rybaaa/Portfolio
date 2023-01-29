import React from 'react';
import s from './Main.module.scss'
import photo from '../assets/img/photo.jpg'
import {ParticlesBackground} from "../common/components/Particles/ParticlesBackground";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {
    return (
        <div className={s.wrapper}>
            <ParticlesBackground/>
            <div className={s.mainBlock}>
                <Fade left>
                    <div className={s.img}>
                        <img src={photo} alt={'my-photo'}/>
                    </div>
                </Fade>
                <Fade right>
                    <div className={s.info}>
                        <h3>Anton Rybak</h3>
                        <ReactTypingEffect
                            text={["Front End Developer."]}
                        />
                        <p>I'm a Front End Developer from Belarus.
                            Focused on building products with TypeScript / React.
                        </p>
                    </div>
                </Fade>

            </div>
        </div>

    );
};

