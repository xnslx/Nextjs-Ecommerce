import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {getSession, useSession} from 'next-auth/client'
import ShoppingCartItems from '../components/shoppingcartitems'
import ShoppingCartIcon from '../components/ui/shoppingcart'
import EmptyState from '../components/emptystate'


const ShoppingCart = () => {
    const [ session, loading ] = useSession()
    const [isLoading, setIsLoading] = useState(true)
    console.log('shoppingcart' ,session)
    const [items, setItems] = useState([])
    console.log(items)

    useEffect(() => {
        axios.get('http://localhost:3000/api/shoppingcart').then(res => {
            console.log(res)
            setItems(res.data.shoppingCart)
        }).catch(err => {
            console.log(err)
        })
    },[])
    if(session) {
        return (
            <div>
                <ShoppingCartItems items={items}/>
            </div>
        )
    }
    return <EmptyState />
};

export default ShoppingCart;
