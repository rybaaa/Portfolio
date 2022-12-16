import React from 'react';
import s from './Contacts.module.css'
import {Button, TextField} from "@material-ui/core";

export const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.hl}></div>
            <div className={s.formBlock}>
                <form className={s.form} action="">
                    <TextField
                        InputProps={{ inputProps: { style: { color: '#fff' }}}}
                        id="name"
                        placeholder="Your name"
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        InputProps={{ inputProps: { style: { color: '#fff' }}}}
                        id="email"
                        placeholder="Your email"
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="letter"
                        multiline
                        fullWidth
                        minRows={4}
                        variant="outlined"
                    />
                </form>
                <Button variant="contained" size={"large"} color={'primary'} style={{width:'100px'}} href="" >Send</Button>
            </div>
            <div className={s.hl}></div>
        </div>
    );
};

