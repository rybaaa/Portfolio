import React from 'react';
import s from './Contacts.module.scss'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Roll from 'react-reveal/Roll';


export const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <Roll left>
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
                                "& .MuiInputLabel-root": {color: "#ff014f"},
                                border: "1px solid #ff014f",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#ff014f"
                                    }
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: '#ff014f'
                                    }
                                }
                            }}
                        />
                        <TextField
                            InputProps={{inputProps: {style: {color: '#fff'}}}}
                            type={'email'}
                            id="email"
                            placeholder="Your email"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{
                                "& .MuiInputLabel-root": {color: "#ff014f"},
                                border: "1px solid #ff014f",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#ff014f"
                                    }
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: '#ff014f'
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
                                "& .MuiInputLabel-root": {color: "#ff014f"},
                                border: "1px solid #ff014f",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#ff014f"
                                    }
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: '#ff014f'
                                    }
                                }
                            }}
                        />
                    </form>
                    <Button
                        className={s.btn}
                        style={{backgroundColor: '#f9004d'}}
                        variant="contained"
                        size={"large"}
                        disableElevation
                        sx={{
                            ':hover': {
                                opacity:'0.8'
                            }
                        }}
                        href="mailto: bolshayaryba22@gmail.com">
                        Send Message
                    </Button>
                </div>
            </Roll>
        </div>
    );
};

