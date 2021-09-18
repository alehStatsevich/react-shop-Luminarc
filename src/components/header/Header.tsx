import React from 'react';
import Nav from "../nav/Nav";
import  style from "./Header.module.css";
import photo from "../../common/img/logo.png";


const Header = () => {
    return (
        <div>
            <Nav/>
            <div>
                <p>+1(111) 111 11 11</p>
                <p>+1(111) 111 11 11</p>
                <p>График работы:ежедневно с 9.00 до 21.00</p>
                <img className={style.photo} src={photo} alt="photo"/>
            </div>
            {/*<NavMenuSmall/>*/}
        </div>
    );
};

export default Header;