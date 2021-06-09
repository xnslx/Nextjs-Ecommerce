import React from 'react'
import {connectToDatabase} from '../../util/db/db'
import Products from '../../models/Products'
import {useRouter} from 'next/router'
import Image from 'next/image'
import FavoriteIcon from '../../components/ui/fav'
import axios from 'axios'

const ProductItem = ({product}) => {
    const router = useRouter()
    console.log('[productid].js', router)

    const toggleFavHandler = (prodId) => {
        axios.post('http://localhost:3000/api/favoritelist', {
            prodId:prodId
        }).then(res => {
            console.log(res)
        })
    }

    const toggleShoppingCart = (prodId) => {
        console.log('toggleShoppingCart', prodId)
        axios.post('http://localhost:3000/api/shoppingcart', {
            prodId:prodId
        }).then(res => {
            console.log(res)
        })
    }
    return (
        <div className="w-10/12 ml-auto mr-auto mt-8 h-full">
            <ul>
                <Image src={product.image} width="433" height="577" className="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-lime"/>
                <li className="text-2xl leading-7 mb-2 font-bold font-mono mt-4">{product.name}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono"> ${product.price}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono">Size: {product.size}</li>
                <li className="text-1xl leading-7 mb-2 medium font-mono">Stock: {product.stock}</li>
            </ul>
            <div className="flex flex-row justify-between items-center">
                <button className="border p-2 mb-8 border-black shadow-offset-lime w-2/3" onClick={() =>toggleShoppingCart(product._id)}>Add to shopping cart</button>
                <button className="border mb-8 p-2 ml-2 border-black shadow-offset-black" onClick={() =>toggleFavHandler(product._id)}><FavoriteIcon /></button>
            </div>
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
