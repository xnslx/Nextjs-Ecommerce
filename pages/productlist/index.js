import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

// import {connectToDatabase} from '../util/db/db'
// import Products from '../models/Products'

const ProductList = ({products}) => {
    
    return (
        <div>
            {products.map(product => (
                <Link href={`/productlist/${product._id}`} key={product._id}><ul>
                    <Image src={product.image} width="433" height="577"/>
                    <li>{product.name}</li>
                    <li>${product.price}</li>
                </ul></Link>
            ))}
        </div>
    )
};

// export async function getServerSideProps() {
//     const client = await connectToDatabase()
//     const result = await Products.find({})
//     const products = result.map(product => {
//         return product
//     })
//     const results = JSON.parse(JSON.stringify(products)) 

//     return{
//         props:{
//             products:results
//         }
//     }
// }

export async function getStaticProps(context){
    console.log('context', context)
    const res = await fetch('http://localhost:3000/api/productlist')
    const products = await res.json()
    console.log('indexjs', products)
    const productList = products.products
    console.log('productList', productList)
    const [productItem] = productList
    productItem._id = productItem._id.toString()

    return {
        props:{
            products: productList
        }
    }
}




export default ProductList;
