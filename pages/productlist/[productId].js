import React from 'react'
import {connectToDatabase} from '../../util/db/db'
import Products from '../../models/Products'
import {useRouter} from 'next/router'
import Image from 'next/image'

const ProductItem = ({product}) => {
    const router = useRouter()
    console.log('router', router)
    const productId = router.query.productId
    return (
        <ul>
            <Image src={product.image} width="433" height="577"/>
            <li>{product.name}</li>
            <li>$: {product.price}</li>
            <li>Size: {product.size}</li>
            <li>Stock: {product.stock}</li>
        </ul>
    )
};

export async function getServerSideProps({params}) {
    console.log('params', params)
    const client = await connectToDatabase()

    const product = await Products.findById(params.productId).lean()
    product._id = product._id.toString()

    console.log('product', product)

    return{
        props:{
            product
        }
    }
}

export default ProductItem;
