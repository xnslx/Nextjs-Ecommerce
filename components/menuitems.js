import React from 'react'
import Link from 'next/link'

const MenuItems = () => {
    return (
        <div className="flex flex-col">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li><Link href="/login" ><a className="text-lime">Log In</a></Link></li>
                <li className="mt-4"><Link href="/signup"><a className="border font-mono p-2 w-full bg-lime-300 border-black shadow-offset-black">Sign Up</a></Link></li>
            </ul>
        </div>
    )
};

export default MenuItems
