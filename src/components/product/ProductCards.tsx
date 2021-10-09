import React from 'react';
import style from './ProductCards.module.css';
import photoBasket from '../../common/img/basket.png'
import {useDispatch} from "react-redux";
import {addProductBasketAC} from "../../state/app-reducer";
import styleContainer from "../../common/Conteiner.module.css";


type PriceType = {
    amount: number,
    priceFormatted: string
}
type pricePromotialType = {
    amount: number,
    priceFormatted: string
}
type ProductsType = {
    id: string,
    name: string,
    price: PriceType,
    pricePromotial?: pricePromotialType,
    decimal: number,
    image: any

}
export type ProductType = {
    product: ProductsType
}

export const ProductCards = (props: ProductType) => {
    const dispatch = useDispatch()
    const addProduct = () => {
        const action = addProductBasketAC(props.product.id)
        dispatch(action)
    }
    return (
        <div className={style.div}>
        <div className={style.productCardBlock}>
            <div>
                <div className={style.icon}>
                    <img src={props.product.image} className={style.image}/>
                </div>
                <div className={style.workInfo}>
                    <h3 className={style.productTitle}>{props.product.name}</h3>
                    {props.product.pricePromotial?.priceFormatted ?
                        <span>{props.product.pricePromotial.priceFormatted}</span>
                        : <span>{props.product.price.priceFormatted}</span>}
                    <button className={style.btn} onClick={addProduct}>
                        <img src={photoBasket} className={style.basket} alt="photoBasket"/>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

