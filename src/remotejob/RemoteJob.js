import React from 'react';
import {Button} from "@material-ui/core";
import s from './RemoteJob.module.css'

export const RemoteJob = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.hl}></div>
            <div className={s.remoteForm}>
                <h3>Free to remote job!</h3>
                <Button variant="contained" size={"large"} color={'primary'} href="" >Hire Me</Button>
            </div>
        </div>
    );
};

