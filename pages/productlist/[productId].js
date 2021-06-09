import React from 'react'
import {connectToDatabase} from '../../util/db/db'
import Products from '../../models/Products'
import {useRouter} from 'next/router'
import Image from 'next/image'
import FavoriteIcon from '../../components/ui/fav'

const ProductItem = ({product}) => {
    const router = useRouter()
    console.log('[productid].js', router)
    return (
        <div className="w-10/12 ml-auto mr-auto mt-8 h-full">
            <ul>
                <Image src={product.image} width="433" height="577" className="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-lime"/>
                <li className="text-2xl leading-7 mb-2 font-bold font-mono mt-4">{product.name}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono"> ${product.price}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono">Size: {product.size}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono">Stock: {product.stock}</li>
            </ul>
            <button className="border p-2 mb-8 border-black shadow-offset-lime w-2/3">Add to shopping cart</button>
            <button className="border p-2 ml-2 border-black shadow-offset-black "><FavoriteIcon /></button>
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
