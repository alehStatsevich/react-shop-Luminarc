import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {initialStateType} from "../../state/app-reducer";
import TeaSetsComponent from "../productList/TeaSetsComponent";


//Сервизы чайные
const TeaSets2 = () => {
    const products = useSelector<AppRootStateType, initialStateType>(state => state.products)
    console.log(products)
    return (
        <div>
            {
                // products.TeaSets.map((ps) => <TeaSetsComponent key={ps.id}/>)
            }
        </div>
    );
}

export default TeaSets2;