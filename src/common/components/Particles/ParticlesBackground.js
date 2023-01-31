import React, {useCallback} from 'react';
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import {particlesConfig} from "./particles-config";
import s from './ParticlesBackground.module.scss'

export const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
    }, []);
    return (
        <Particles className={s.particles} loaded={particlesLoaded} init={particlesInit} params={particlesConfig}>
        </Particles>
    );
};

