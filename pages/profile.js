import React, {useState, useEffect} from 'react'
import {getSession, signIn, useSession} from 'next-auth/client'
import EmptyState from '../components/emptystate'

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [session, loading] = useSession()

    return (
        <div>
            {session? <p> profile page</p> : <EmptyState  />}
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
