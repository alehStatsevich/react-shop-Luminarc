import React, {useCallback} from 'react';
import style from './ProductCards.module.css';
import photoBasket from '../../common/img/basket.png'
import {useDispatch, useSelector} from "react-redux";
import {addProductAC, FF} from "../../state/app-reducer";
import {AppRootStateType} from "../../state/store";

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
        const action = addProductAC(props.product.id)
        dispatch(action)
    }

    return (
        <div className={style.block}>
            <div>
                <div className={style.icon}>
                    {/*<img src={photoBasket}  className={style.basket} onClick={addToCart} alt="photoBasket"/>*/}
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
    );
}

// export default ProductCards;