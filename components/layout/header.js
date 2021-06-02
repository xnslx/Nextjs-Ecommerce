import React, {useState} from 'react'
import FavoriteIcon from '../ui/fav'
import UserIcon from '../ui/user'
import ShoppingCartIcon from '../ui/shoppingcart'
import MenuIcon from '../ui/menu'
import MenuItems from '../menuitems'

const Header = () => {
    return (
        <>
            <MenuIcon>
                <MenuItems />
            </MenuIcon>
            <div className="flex flex-row justify-end mr-4 mt-8">
                <FavoriteIcon />
                <UserIcon />
                <ShoppingCartIcon />
            </div>
        </>
    )
};

export default Header;
