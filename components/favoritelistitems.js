import React from 'react'
import Image from 'next/image'

const FavoriteListItems = (props) => {
    console.log(props)
    return (
        <div className="grid grid-cols-2 w-11/12 gap-2 ml-auto mr-auto mt-8 lg:grid-cols-3">
            {props.items.map(item => (
                <ul key={item.productId._id}>
                    <Image src={item.productId.image} width="433" height="577" className="absolute inset-0 w-full h-full object-cover "/>
                    <li className="text-base font-bold leading-7 mb-2 font-mono">{item.productId.name}</li>
                    <li className="text-sm leading-7  font-mono">${item.productId.price}</li>
                    <li className="text-sm leading-7  font-mono">Size:{item.productId.size}</li>
                    <li className="text-sm leading-7  font-mono">Stock:{item.productId.stock}</li>
                </ul>
            ))}
        </div>
    )
};

export default FavoriteListItems;
