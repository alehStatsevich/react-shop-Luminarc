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
export type ItemsType = {
    item: Array<ItemType>
}
const NavMenuBig = (props:ItemsType) => {

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
        </div>
    );
};

export default NavMenuBig;
