import s from "./Nav.module.scss";
import React from "react";

export const NavRef = (props) => {
    return (
        <div className={s.navParts}>
            <img className={s.homeImg} src={props.src} alt={'navigation image'}/>
            <p className={s.ref}>{props.text}</p>
        </div>
    )
}