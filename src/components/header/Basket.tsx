import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import style from "./Basket.module.css"
import {addProductAC, deleteAllProductAC, deleteProductAC} from "../../state/app-reducer";


const Basket = () => {
    const elementsForBasket= useSelector((state:AppRootStateType)=> state.products.elementsForBasket)
    const dispatch = useDispatch()

    const [total, setTotal] = useState(0)
    useEffect(() => {
        const totalPrice = elementsForBasket.reduce((acc, curr) => {
            return acc + +curr.product.price.priceFormatted.slice(1) * curr.count
        }, 0);
        setTotal(totalPrice)

    }, [elementsForBasket])
    console.log(elementsForBasket, 'basket')
    return (<>
        {elementsForBasket.length ?
            <div>
                {elementsForBasket.map((el) => {
                    return (
                        <tr key={el.product.id} className={style.cartBlock}>
                            <td><img src={el.product.image}/></td>
                            <td>{el.product.name}</td>
                            <td className={style.blockBasket}>
                                <div className={style.dec}
                                     onClick={() => dispatch(deleteProductAC(el.product.id))}
                                >-
                                </div>
                                <div className={style.num}>
                                    {el.count}
                                </div>
                                <div className={style.inc}
                                     onClick={() => dispatch(addProductAC(el.product.id))}
                                >+
                                </div>
                            </td>
                            <td>{`$ ${+el.product.price.priceFormatted.slice(1) * el.count}`}</td>
                            <td>
                                <div className={style.del}
                                    onClick={() => dispatch(deleteAllProductAC(el.product.id))}>x
                                </div>
                            </td>
                        </tr>
                    )
                })}
                <div>
                    Итого ${total}
                </div>
            </div> : <div>your basket empty</div>
        }

    </>);
}

export default Basket;