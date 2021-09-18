import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Nav.module.css";


type PhotosType ={
    big: string
    small:string
}
type ItemType ={
    href:string
    photos:PhotosType
    title: string
}

const NavMenuBig = (props:any) => {
console.log(props.item)
    return (
        <div>
                {props.item.map((item:ItemType) => {
                    return <div>
                        <img className={style.photo} src={item.photos.big}/>
                        <NavLink to={item.href} className={style.link} activeStyle={{
                           color: "#FB2E86"
                        }}>{item.title}</NavLink>
                    </div>


                })}

            {/*<div>*/}
            {/*<img className={style.photo} src={photo} alt="photo"/>*/}
            {/*<NavLink to={PATH. PRODUCT} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы столовые</NavLink>*/}
            {/*</div>*/}
            {/*<NavLink to={PATH. PRODUCT1} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT2} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Тарелки</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT3} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Салатники</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT4} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Блюда/Селедочницы</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT5} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}></NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT6} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT7} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT8} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT9} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT10} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT11} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT12} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT13} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT14} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
            {/*<NavLink to={PATH. PRODUCT15} className={style.link} activeStyle={{*/}
            {/*    color: "#FB2E86"*/}
            {/*}}>Сервизы чайные</NavLink>*/}
        </div>
    );
};

export default NavMenuBig;
