import React from 'react';
import Nav from "../nav/Nav";
import style from "./Header.module.css";
import photo from "../../common/img/logo.png";
import BasketMenu from "./BasketMenu";
import styleContainer from "../../common/Conteiner.module.css";
import banner from "../../common/img/baner.png"

const Header = () => {
    return (
        <div>
            <Nav/>
            <div className={`${styleContainer.container} ${style.header}`}>
                <div className={style.tel}>
                    <p>+1(111) 111 11 11</p>
                    <p>+1(111) 111 11 11</p>
                    <p>График работы:ежедневно с 9.00 до 21.00</p>
                </div>
                <img className={style.photo} src={photo} alt="photo"/>
                <BasketMenu/>
            </div>
            <div className={style.blockLink}>

            </div>
            <img className={style.banner} src={banner} alt="banner"/>
        </div>
    );
};

export default Header;