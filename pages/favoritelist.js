import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {getSession, useSession} from 'next-auth/client'

const FavoriteList = (props) => {
    const [ session, loading ] = useSession()
    const [isLoading, setIsLoading] = useState(true)
    console.log('FavoriteList' ,session)

    useEffect(() => {
        axios.get('http://localhost:3000/api/favoritelist').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },[])
    if(session){
        return (
            <div>
                <h1>this is the favorite list</h1>
            </div>
        )
    }
    return <p>You need to log in first.</p>
};



export default FavoriteList;
