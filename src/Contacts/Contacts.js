import React from 'react';
import s from './Contacts.module.scss'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.formBlock}>
                <form className={s.form} action="">
                    <TextField
                        InputProps={{inputProps: {style: {color: '#fff'}}}}
                        id="name"
                        placeholder="Your name"
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            "& .MuiInputLabel-root": {color: "#1976d2"},
                            border: "1px solid #1976d2",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "#1976d2"
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                    borderColor: '#1976d2'
                                }
                            }
                        }}
                    />
                    <TextField
                        InputProps={{inputProps: {style: {color: '#fff'}}}}
                        id="email"
                        placeholder="Your email"
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            "& .MuiInputLabel-root": {color: "#1976d2"},
                            border: "1px solid #1976d2",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "#1976d2"
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                    borderColor: '#1976d2'
                                }
                            }
                        }}
                    />
                    <TextField
                        id="letter"
                        multiline
                        fullWidth
                        minRows={4}
                        variant="outlined"
                        placeholder={'Write your message here'}
                        margin="normal"
                        InputProps={{inputProps: {style: {color: '#fff'}}}}
                        sx={{
                            "& .MuiInputLabel-root": {color: "#1976d2"},
                            border: "1px solid #1976d2",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "#1976d2"
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                    borderColor: '#1976d2'
                                }}
                        }}
                    />
                </form>
                <Button variant="contained"
                        size={"large"}
                        color={'primary'}
                        disableElevation
                        href="">
                    Send Message
                </Button>
            </div>
            <div className={s.hl}></div>
        </div>
    );
};

