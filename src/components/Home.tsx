import React from 'react';
import NavMenuBig, {ItemsType} from "./nav/NavMenuBig";

const Home = (props:ItemsType) => {
    return (
        <div>
            <NavMenuBig item={props.item}/>
        </div>
    );
};

export default Home;