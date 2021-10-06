import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {ProductCards} from "./ProductCards";
import {elementsType} from "../../state/app-reducer";




const Product = () => {
    const {title} = useParams<{ title: string }>();
    const elements = useSelector<AppRootStateType,any >(state => state.products.elements)
    console.log(elements)
    const el = elements.find((el:elementsType) => {
        return el.id === title
    })
    return (
        <div>
            {
                el.items.map((el:elementsType) => {
                    return <ProductCards el={el}/>
                    // <h1>{el.name}</h1>
                })
            }
        </div>
    );
}

export default Product;