import React from 'react';
import s from './Project.module.scss'
import Button from "@mui/material/Button";

export const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.logoBlock} style={props.style}>
                <Button
                    style={{opacity: '0.8', backgroundColor: '#f9004d'}}
                    variant="contained"
                    color="primary"
                    href={props.link}
                    target={'_blank'}
                    size={'large'}
                    sx={{
                        ':hover': {
                            opacity: '0.8'
                        }
                    }}
                >
                    Link
                </Button>
            </div>
            <div className={s.projectInfo}>
                <h4>{props.title}</h4>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

