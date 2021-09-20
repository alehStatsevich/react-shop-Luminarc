import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from "../components/Home";
import Delivery from "../components/Delivery";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/Contact";
import Guarantee from "../components/Guarantee";
import Reviews from "../components/Reviews";
import NavMenuBig from "../components/nav/NavMenuBig";
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
import DinnerSets from "./imgSmallMenu/image 6 (15).png";
import TeaSets from "./imgSmallMenu/image 6 (14).png";
import Plates from "./imgSmallMenu/image 6 (13).png";
import SaladBowls from "./imgSmallMenu/image 6 (12).png";
import Herringbirds from "./imgSmallMenu/image 6 (11).png";
import WineGlasses from "./imgSmallMenu/image 6 (10).png";
import ShotGlasses from "./imgSmallMenu/image 6 (9).png";
import Mugs from "./imgSmallMenu/image 6 (8).png";
import SoupBowls from "./imgSmallMenu/image 6 (7).png";
import HeatResistantCookware from "./imgSmallMenu/image 6 (6).png";
import Containers from "./imgSmallMenu/image 6 (5).png";
import BulkCans from "./imgSmallMenu/image 6 (4).png";
import DrinkingSets from "./imgSmallMenu/image 6 (3).png";
import Jugs from "./imgSmallMenu/image 6 (2).png";
import Shelves from "./imgSmallMenu/image 6 (1).png";
import ChildrenTableware from "./imgSmallMenu/image 6.png";
import DinnerSetsB from "../common/imgBigMenu/Rectangle 6.png";
import TeaSetsB from "../common/imgBigMenu/Rectangle 6 (1).png";
import PlatesB from "../common/imgBigMenu/Rectangle 6 (2).png";
import SaladBowlsB from "../common/imgBigMenu/Rectangle 6 (3).png";
import HerringbirdsB from "../common/imgBigMenu/Rectangle 6 (7).png";
import WineGlassesB from "../common/imgBigMenu/Rectangle 6 (6).png";
import ShotGlassesB from "../common/imgBigMenu/Rectangle 6 (5).png";
import MugsB from "../common/imgBigMenu/Rectangle 6 (4).png";
import SoupBowlsB from "../common/imgBigMenu/Rectangle 6 (11).png";
import HeatResistantCookwareB from "../common/imgBigMenu/Rectangle 6 (10).png";
import ContainersB from "../common/imgBigMenu/Rectangle 6 (9).png";
import BulkCansB from "../common/imgBigMenu/Rectangle 6 (8).png";
import DrinkingSetsB from "../common/imgBigMenu/Rectangle 6 (15).png"
import JugsB from "../common/imgBigMenu/Rectangle 6 (14).png";
import ShelvesB from "../common/imgBigMenu/Rectangle 6 (13).png";
import ChildrenTablewareB from "../common/imgBigMenu/Rectangle 6 (12).png";
import Compare from "../components/header/Compare";
import Favorites from "../components/header/Favorites";
import Basket from "../components/header/Basket";

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
    BASKET:'/basket',
    COMPARE:'/compare',
    FAVORITES:'/favorites'
}

const item = [
    {title: "Сервизы столовые", href: "/product", photos: {big: DinnerSetsB, small: DinnerSets}},
    {title: "Сервизы чайные", href: "/product1", photos: {big: TeaSetsB, small: TeaSets}},
    {title: "Тарелки", href: "/product2", photos: {big: PlatesB, small: Plates}},
    {title: "Салатники", href: "/product3", photos: {big: SaladBowlsB, small: SaladBowls}},
    {title: "Блюда / Селедочницы", href: "/product4", photos: {big: HerringbirdsB, small: Herringbirds}},
    {title: "Бокалы / Фужеры", href: "/product5", photos: {big: WineGlassesB, small: WineGlasses}},
    {title: "Стаканы / Рюмки", href: "/product6", photos: {big: ShotGlassesB, small: ShotGlasses}},
    {title: "Кружки", href: "/product7", photos: {big: MugsB, small: Mugs}},
    {title: "Супницы / Бульонницы", href: "/product8", photos: {big: SoupBowlsB, small: SoupBowls}},
    {title: "Жаропрочная посуда", href: "/product9", photos: {big: HeatResistantCookwareB, small: HeatResistantCookware}},
    {title: "Контейнеры стеклянные", href: "/product10", photos: {big: ContainersB, small: Containers}},
    {title: "Банки для сыпучих", href: "/product11", photos: {big: BulkCansB, small: BulkCans}},
    {title: "Питьевые наборы", href: "/product12", photos: {big: DrinkingSetsB, small: DrinkingSets}},
    {title: "Кувшины", href: "/product13", photos: {big: JugsB, small: Jugs}},
    {title: "Этажерки / Меажницы", href: "/product14", photos: {big: ShelvesB, small: Shelves}},
    {title: "Детская посуда", href: "/product15", photos: {big: ChildrenTablewareB, small: ChildrenTableware}}
]

const Routes = () => {
    return (
        <div>
            <Header item={item}/>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} render={() => <Home item={item}/>}/>
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
                {/*basketmenu*/}
                <Route path={PATH.BASKET} render={() => <Basket/>}/>
                <Route path={PATH.FAVORITES} render={() => <Favorites/>}/>
                <Route path={PATH.COMPARE} render={() => <Compare/>}/>
                {/*menuCenter*/}
            </Switch>
            <Footer/>
        </div>
    );
};


export default Routes;