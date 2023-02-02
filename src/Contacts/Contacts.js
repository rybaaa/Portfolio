import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import s from './Contacts.module.scss'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Roll from 'react-reveal/Roll';
import {SuccessBar} from "../common/components/SuccessBar/SuccessBar";
import {ErrorBar} from "../common/components/ErrorBar/ErrorBar";


export const Contacts = () => {
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1ww011p', 'template_d05a9ml', form.current, 'faQ4xHrdVVOauWiUp')
            .then(() => {
                e.target.reset()
                setSuccess(true)
            }, () => {
                setError(true)
            });
    };
    return (
        <div className={s.wrapper}>
            {success && <SuccessBar open={success} setOpen={setSuccess} />}
            {error && <ErrorBar open={error} setOpen={setError} />}
            <Roll left>
                <div className={s.formBlock}>
                    <form className={s.form} ref={form} onSubmit={sendEmail}>
                        <TextField
                            InputProps={{inputProps: {style: {color: '#fff'}}}}
                            name='user_name'
                            id="user_name"
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
                            name='user_email'
                            id="user_email"
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
                            id="message"
                            name='message'
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
                        <Button
                            type={"submit"}
                            onSubmit={sendEmail}
                            className={s.btn}
                            style={{backgroundColor: '#f9004d'}}
                            variant="contained"
                            size={"large"}
                            disableElevation
                            sx={{
                                ':hover': {
                                    opacity: '0.8'
                                }
                            }}
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </Roll>
        </div>
    );
};

