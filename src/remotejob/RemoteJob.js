import React from 'react';
import Button from "@mui/material/Button";
import s from './RemoteJob.module.scss'

export const RemoteJob = () => {
    return (
        <div id='contacts'  className={s.wrapper}>
            <div className={s.remoteForm}>
                <h2>Free to remote job!</h2>
                <Button
                    className={s.btn}
                    style={{backgroundColor:'#f9004d'}}
                    variant="contained"
                    size={"large"}
                    href="https://www.linkedin.com/in/anton-rybak-8babb6188/"
                    target={'_blank'}
                >Hire Me</Button>
            </div>
        </div>
    );
};

