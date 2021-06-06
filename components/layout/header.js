import React, {useState} from 'react'
import FavoriteIcon from '../ui/fav'
import UserIcon from '../ui/user'
import ShoppingCartIcon from '../ui/shoppingcart'
import MenuIcon from '../ui/menu'
import MenuItems from '../menuitems'
import Link from 'next/link'
import mitt from 'next/dist/next-server/lib/mitt'
import {getSession, signIn, useSession} from 'next-auth/client'

const Header = () => {
    const [session, loading] = useSession()
    console.log('session', session)
    return (
        <>
            <MenuIcon>
                <MenuItems />
            </MenuIcon>
            <div className="flex flex-row justify-end mr-4 mt-8">
                <FavoriteIcon />
                <ShoppingCartIcon />
                <Link href='/profile'><a><UserIcon />{session? <span>{session.user.name}</span>: null}</a></Link>
            </div>
        </>
    )
};



export default Header;
