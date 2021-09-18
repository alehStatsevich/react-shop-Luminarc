import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from "../components/Home";
import Delivery from "../components/Delivery";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/Contact";
import Guarantee from "../components/Guarantee";
import Reviews from "../components/Reviews";
import NavMenuSmall from "../components/nav/NavMenuSmall";
import Product from "../components/product/Product";
import Product1 from "../components/product/Product1";
import Product2 from "../components/product/Product2";
import Product3 from "../components/product/Product3";
import Product4 from "../components/product/Product4";
import Product5 from "../components/product/Product5";
import Product6 from "../components/product/Product6";
import Product8 from "../components/product/Product8";
import Product7 from "../components/product/Product7";
import Product9 from "../components/product/Product9";
import Product10 from "../components/product/Product10";
import Product11 from "../components/product/Product11";
import Product12 from "../components/product/Product12";
import Product14 from "../components/product/Product14";
import Product13 from "../components/product/Product13";
import Product15 from "../components/product/Product15";
import DinnerSets from "../common/img/image 6 (15).png";
import TeaSets from "../common/img/image 6 (14).png";
import Plates from "../common/img/image 6 (13).png";
import SaladBowls from "../common/img/image 6 (12).png";
import Herringbirds from "../common/img/image 6 (11).png";
import WineGlasses from "../common/img/image 6 (10).png";
import ShotGlasses from "../common/img/image 6 (9).png";
import Mugs from "../common/img/image 6 (8).png";
import SoupBowls from "../common/img/image 6 (7).png";
import HeatResistantCookware from "../common/img/image 6 (6).png";
import Containers from "../common/img/image 6 (5).png";
import BulkCans from "../common/img/image 6 (4).png";
import DrinkingSets from "../common/img/image 6 (3).png";
import Jugs from "../common/img/image 6 (2).png";
import Shelves from "../common/img/image 6 (1).png";
import ChildrenTableware from "../common/img/image 6.png"
import ff from "../common/img/image 6 (1).png"

export const PATH = {
    HOME: '/home',
    DELIVERY: '/delivery',
    CONTACT: '/contact',
    GUARANTEE: '/guarantee',
    REVIEWS: '/reviews',
    PRODUCT: '/product',
    PRODUCT1: '/product1',
    PRODUCT2: '/product2',
    PRODUCT3: '/product3',
    PRODUCT4: '/product4',
    PRODUCT5: '/product5',
    PRODUCT6: '/product6',
    PRODUCT7: '/product7',
    PRODUCT8: '/product8',
    PRODUCT9: '/product9',
    PRODUCT10: '/product10',
    PRODUCT11: '/product11',
    PRODUCT12: '/product12',
    PRODUCT13: '/product13',
    PRODUCT14: '/product14',
    PRODUCT15: '/product15',

}

const item = [
    {title: "Сервизы столовые", href: "/product", photos: {big: ff, small: DinnerSets}},
    {title: "Сервизы чайные", href: "/product1", photos: {big: ff, small: TeaSets}},
    {title: "Тарелки", href: "/product2", photos: {big: ff, small: Plates}},
    {title: "Салатники", href: "/product3", photos: {big: ff, small: SaladBowls}},
    {title: "Блюда / Селедочницы", href: "/product4", photos: {big: ff, small: Herringbirds}},
    {title: "Бокалы / Фужеры", href: "/product5", photos: {big: ff, small: WineGlasses}},
    {title: "Стаканы / Рюмки", href: "/product6", photos: {big: ff, small: ShotGlasses}},
    {title: "Кружки", href: "/product7", photos: {big: ff, small: Mugs}},
    {title: "Супницы / Бульонницы", href: "/product8", photos: {big: ff, small: SoupBowls}},
    {title: "Жаропрочная посуда", href: "/product9", photos: {big: ff, small: HeatResistantCookware}},
    {title: "Контейнеры стеклянные", href: "/product10", photos: {big: ff, small: Containers}},
    {title: "Банки для сыпучих", href: "/product11", photos: {big: ff, small: BulkCans}},
    {title: "Питьевые наборы", href: "/product12", photos: {big: ff, small: DrinkingSets}},
    {title: "Кувшины", href: "/product13", photos: {big: ff, small: Jugs}},
    {title: "Этажерки / Меажницы", href: "/product14", photos: {big: ff, small: Shelves}},
    {title: "Детская посуда", href: "/product15", photos: {big: ff, small: ChildrenTableware}}
]

const Routes = () => {
    return (
        <div>
            <Header/>
            <NavMenuSmall item={item}/>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} render={() => <Home/>}/>
                <Route path={PATH.DELIVERY} render={() => <Delivery/>}/>
                <Route path={PATH.CONTACT} render={() => <Contact/>}/>
                <Route path={PATH.GUARANTEE} render={() => <Guarantee/>}/>
                <Route path={PATH.REVIEWS} render={() => <Reviews/>}/>
                {/*столовый сервиз*/}
                <Route path={PATH.PRODUCT} render={() => <Product/>}/>
                <Route path={PATH.PRODUCT1} render={() => <Product1/>}/>
                <Route path={PATH.PRODUCT2} render={() => <Product2/>}/>
                <Route path={PATH.PRODUCT3} render={() => <Product3/>}/>
                <Route path={PATH.PRODUCT4} render={() => <Product4/>}/>
                <Route path={PATH.PRODUCT5} render={() => <Product5/>}/>
                <Route path={PATH.PRODUCT6} render={() => <Product6/>}/>
                <Route path={PATH.PRODUCT7} render={() => <Product7/>}/>
                <Route path={PATH.PRODUCT8} render={() => <Product8/>}/>
                <Route path={PATH.PRODUCT9} render={() => <Product9/>}/>
                <Route path={PATH.PRODUCT10} render={() => <Product10/>}/>
                <Route path={PATH.PRODUCT11} render={() => <Product11/>}/>
                <Route path={PATH.PRODUCT12} render={() => <Product12/>}/>
                <Route path={PATH.PRODUCT13} render={() => <Product13/>}/>
                <Route path={PATH.PRODUCT14} render={() => <Product14/>}/>
                <Route path={PATH.PRODUCT15} render={() => <Product15/>}/>
            </Switch>
            <Footer/>
        </div>
    );
};


export default Routes;