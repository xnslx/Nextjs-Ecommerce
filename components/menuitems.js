import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'

const MenuItems = () => {
    const [session, loading] = useSession()
    return (
        <div className="flex flex-col">
            <ul>
                <Link href='/productlist'><li>Home</li></Link>
                <li>Contact</li>
                {!session && <>
                    <li className="mt-4 "><Link href="/login" ><button className="border font-mono p-2 w-2/3 bg-lime-300 border-black shadow-offset-black">Log In</button></Link></li>
                    <li className="mt-8"><Link href="/signup"><button className="border font-mono p-2 w-2/3 bg-lime-300 border-black shadow-offset-black">Sign Up</button></Link></li>
                </>}
                {session && <>
                    <button className="border font-mono p-2 w-2/3 bg-lime-300 border-black shadow-offset-black" onClick={() => signOut()}>Log Out</button>
                </>}
            </ul>
        </div>
    )
};

export default MenuItems
