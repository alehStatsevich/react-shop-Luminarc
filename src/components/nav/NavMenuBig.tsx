import React, {useCallback} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import style from "./Nav.module.css";
import {useDispatch} from "react-redux";
import {addProductAC} from "../../state/app-reducer";


type PhotosType = {
    big: string
    small: string
}
export type ItemType = {
    href: string
    photos: PhotosType
    title: string
}
export type ItemsType = {
    item: Array<ItemType>
}
const NavMenuBig = (props: any) => {
    // const dispatch = useDispatch()
    // const addToCart = useCallback(function () {
    //     const action = addProductAC(props.item.type)
    //     dispatch(action)
    // }, [])

    const clickHandler =(title: string)=> {
        debugger
        // return <Redirect to={`/products/${title}`}/>
        return <Redirect to={`rrr`}/>

    }


    return (
        <div className={style.NavMenuBig}>
            {props.item.map((item: ItemType) => {
                return <div className={style.bigLink}>
                    <img className={style.photo} src={item.photos.big}/>
                    <NavLink to={`/products/${item.title}`} className={style.linkBig}
                             activeStyle={{
                                 color: "#FB2E86"
                             }}>
                        {item.title}
                    </NavLink>
                </div>
            })}
        </div>
    );
};

export default NavMenuBig;
