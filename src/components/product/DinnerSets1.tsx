import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {initialStateType} from "../../state/app-reducer";
import DinnerSetsComponent from "../productList/DinnerSetsComponent";

// сервизы столовые
const DinnerSets1 = () => {
    const products = useSelector<AppRootStateType, initialStateType>(state => state.products)
    console.log(products)
    return (
        <div>
            сервизы столовые
            {
                // products.DinnerSets.map((ps)  =>  <DinnerSetsComponent key={ps.id}/>)

            }
        </div>
    );
};

export default DinnerSets1;