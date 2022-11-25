import React from 'react';
import s from './Project.module.css'
import {Button} from "@material-ui/core";

export const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.logoBlock}>
                <a href = {props.link}><img src={props.img}/></a>
                <Button style={{opacity: '0.3', position: 'absolute', top: '50%', right: '30%'}} variant="contained" color="default" href="" size={'large'}>
                    Link
                </Button>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

