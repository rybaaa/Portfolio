import React from 'react';
import s from './Project.module.scss'
import {Button} from "@material-ui/core";

export const Project = (props) => {
    return (
        <div className={s.projectBlock} >
            <div className={s.logoBlock} style={props.style} >
                <a href = {props.link}><img src={props.img}/></a>
                <Button style={{opacity: '0.3'}} variant="contained" color="primary" href="" size={'large'}>
                    Link
                </Button>
            </div>
            <div className={s.projectInfo}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>

        </div>
    );
};

