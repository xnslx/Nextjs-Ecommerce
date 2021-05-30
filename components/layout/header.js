import React from 'react'
import FavoriteIcon from '../ui/fav'
import UserIcon from '../ui/user'
import ShoppingCartIcon from '../ui/shoppingcart'

const Header = () => {
    return (
        <div className="flex flex-row justify-end mr-4 mt-8">
            <FavoriteIcon />
            <UserIcon />
            <ShoppingCartIcon />
        </div>
    )
};

export default Header;
