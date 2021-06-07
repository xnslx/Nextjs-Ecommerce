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

    useEffect(() => {
        axios.get('http://localhost:3000/api/favoritelist').then(res => {
            console.log(res)
            setItems(res.data.favoriteList)
        }).catch(err => {
            console.log(err)
        })
    },[])
    if(session){
        return (
            <div>
                <FavoriteListItems items={items}/>
            </div>
        )
    }
    return <EmptyState />
};

// export async function getServerSideProps(context) {
//     const res = await fetch('http://localhost:3000/api/favoritelist', {
//         method:'GET',
//         headers:{
//             'Content-Type': 'application/json',
//         }
//     }) 
//     console.log('res',res)
//     const data = await res.json()
//     console.log('data',data)
//     return {
//         props:{
//             data
//         }
//     }
// }

export default FavoriteList;
