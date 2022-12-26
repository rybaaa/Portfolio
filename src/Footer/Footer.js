import React from 'react';
import s from './Footer.module.scss'
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CopyrightIcon from '@material-ui/icons/Copyright';

export const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.footerBlock}>
                <h3>Anton Rybak</h3>
                <div className={s.icons}>
                    <TelegramIcon fontSize={'large'} cursor={'pointer'} href=''/>
                    <LinkedInIcon fontSize={'large'} cursor={'pointer'} href=''/>
                    <WhatsAppIcon fontSize={'large'} cursor={'pointer'} href=''/>
                </div>
                <div className={s.rightsBlock}>
                    <CopyrightIcon/>
                    <span>All rights reserved</span>
                </div>
            </div>
        </div>
    );
};
