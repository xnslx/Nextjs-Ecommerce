import React, {useState, useEffect} from 'react'
import {getSession, signIn, useSession} from 'next-auth/client'

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [session, loading] = useSession()
    console.log('session', session)
    // useEffect(() => {
    //     getSession().then(session => {
    //         if(!session) {
    //             window.location.href='/login'
    //         } else {
    //             setIsLoading(false)
    //         }
    //     })
    // },[])
    return (
        <div>
            {session? <p> profile page</p> : <p>You need to log in </p>}
        </div>
    )
};

export async function getServerSideProps(context) {    
    return {
        props:{
            session: await getSession(context)
        }
    }
}

export default Profile
