import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import {setCredentials} from "../../api";
import {UserContext} from "../../App";
import i18next from "../../language/i18n"
import logo from '../../img/logo.png'
import './Menu.css'

export default () => {

    const {t} = useTranslation("menu")
    const {user, logout, loggedIn} = useContext(UserContext)

    const changeLanguage = lang => e => {
        e.preventDefault()
        i18next.changeLanguage(lang)
    }

    const logoutClick = (e) => {
        e.preventDefault()
        setCredentials(null)
        logout()
    }

    const loggedInBlock = loggedIn() ?
    (
        <>
            <span className="mr50 name">{user.name} {user.lastName}</span>
            &nbsp;
            <a href="#" onClick={logoutClick} className="border mr1">{t("logout")}</a>
        </>
    ) :
        <NavLink to="/login" className="mr1 border">{t("login")}</NavLink>
        

    return (
        <div className="navbar text-left">
            <img src={logo} className="krastas"></img>
            <NavLink className="ml50 border" to="/cars">{t("cars")}</NavLink>
            <NavLink className="ml15 border " to="/services" >{t("services")}</NavLink>
            <NavLink className="ml15 border " to="/services/service">{t("newService")}</NavLink>
            <div className="text-right">
                {loggedInBlock}
                <a href="#" onClick={changeLanguage('lt')} className="mr1 lang">LT</a>
                <a href="#" onClick={changeLanguage('en')} className="mr1 lang">EN</a>
            </div>
    
        </div>
    
    )
}