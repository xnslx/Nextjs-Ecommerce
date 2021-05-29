import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import FavoriteIcon from '../../components/ui/fav'
import SortFilter from '../../components/ui/sortfilter';
import PopOver from '../../components/ui/popover';

// import {connectToDatabase} from '../util/db/db'
// import Products from '../models/Products'

const ProductList = ({products}) => {
    const [open, setOpen] = useState(false)

    const clickHandler = e => {
        e.preventDefault()
        setOpen(prevState => ({
            open: !prevState.open
        }))
    }

    const clickedHandler = (e) => {
        console.log('hello')
    }

    return (
        <> 
            {open? <PopOver /> : null}
            <button onClick={clickHandler}><SortFilter /></button>
            <div className="grid grid-cols-2 w-11/12 gap-2 ml-auto mr-auto mt-8 lg:grid-cols-3">
                {products.map(product => (
                    <Link href={`/productlist/${product._id}`} key={product._id}><ul>
                        <Image src={product.image} width="433" height="577" className="absolute inset-0 w-full h-full object-cover"/>
                        <FavoriteIcon />
                        <li className="text-base leading-7 mb-2  font-mono">{product.name}</li>
                        <li className="text-base leading-7">${product.price}</li>
                    </ul></Link>
                ))}
            </div>
        </>
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
