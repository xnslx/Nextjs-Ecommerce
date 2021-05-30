import React from 'react'
import {connectToDatabase} from '../../util/db/db'
import Products from '../../models/Products'
import {useRouter} from 'next/router'
import Image from 'next/image'

const ProductItem = ({product}) => {
    const router = useRouter()
    console.log('[productid].js', router)
    return (
        <div className="w-10/12 ml-auto mr-auto mt-8">
            <ul>
                <Image src={product.image} width="433" height="577" className="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-lime"/>
                <li className="text-2xl leading-7 mb-2 font-bold font-mono mt-4">{product.name}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono"> ${product.price}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono">Size: {product.size}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono">Stock: {product.stock}</li>
            </ul>
            <button className="border p-2 border-black shadow-offset-lime">Add to shopping cart</button>
        </div>
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
