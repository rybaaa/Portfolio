import React from 'react';
import Button from "@mui/material/Button";
import s from './RemoteJob.module.scss'

export const RemoteJob = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.remoteForm}>
                <h3>Free to remote job!</h3>
                <Button variant="contained" size={"large"} color={'primary'} href="" >Hire Me</Button>
            </div>
        </div>
    );
};

