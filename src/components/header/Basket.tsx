import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

const Basket = () => {
    const elementsForBasket= useSelector((state:AppRootStateType)=> state.products.elementsForBasket)
    console.log(elementsForBasket, 'карзина')
    return (
        <div>
            basket
        </div>
    );
};

export default Basket;