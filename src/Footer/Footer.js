import React from 'react';
import s from './Footer.module.scss'
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright';

export const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.footerBlock}>
                <h4>Anton Rybak</h4>
                <div className={s.icons}>
                    <TelegramIcon color={'secondary'} fontSize={'large'} cursor={'pointer'} onClick={() => window.open('https://t.me/currentpos')}/>
                    <LinkedInIcon color={'secondary'} fontSize={'large'} cursor={'pointer'} onClick={() => window.open('https://www.linkedin.com/in/anton-rybak-8babb6188/')} />
                    <FacebookIcon color={'secondary'} fontSize={'large'} cursor={'pointer'} onClick={() => window.open('https://www.facebook.com/anton.rybak.75')} />
                </div>
                <div className={s.rightsBlock}>
                    <CopyrightIcon color={'secondary'}/>
                    <span>All rights reserved</span>
                </div>
            </div>
        </div>
    );
};
