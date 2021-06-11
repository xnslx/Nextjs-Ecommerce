import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {getSession, useSession} from 'next-auth/client'
import FavoriteListItems from '../components/favoritelistitems'
import EmptyState from '../components/emptystate'


const FavoriteList = (props) => {
    const [ session, loading ] = useSession()
    const [isLoading, setIsLoading] = useState(true)
    console.log('FavoriteList' ,session)
    const [items, setItems] = useState([])
    console.log(items)

    useEffect(() => {
        axios.get('http://localhost:3000/api/favoritelist').then(res => {
            console.log(res)
            setItems(res.data.favoriteList)
        }).catch(err => {
            console.log(err)
        })
    },[])
    // if(items.length === 0){
    //     return(
    //         <p className="text-base mt-12 w-2/3 ml-auto mr-auto text-center font-bold leading-7 mb-2 font-mono">Start adding some products to your favorite list!</p>
    //     )
    // }
    if(session){
        return (
            <div>
                <FavoriteListItems items={items}/>
            </div>
        )
    }
    return <EmptyState />
};



export default FavoriteList;
