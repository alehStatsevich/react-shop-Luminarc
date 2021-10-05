import React from 'react';
import {useParams} from 'react-router-dom';

const Product2 = () => {

    const {title} = useParams<{ title: string }>();
    debugger
    console.log('title: ', title)

    return (
        <div>
            {/*<h1>qqqq</h1>*/}
            {title}
            // state.elements.filter('type')
        </div>
    );
};

export default Product2;