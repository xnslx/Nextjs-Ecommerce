import React from 'react';
import Link from 'next/link'
import Products from '../models/Products'
import {connectToDatabase} from '../util/db/db'


const ProductList = (props) => {
    console.log('props', props)
    return(
        <h2>Product List</h2>
    )
};


export default ProductList;