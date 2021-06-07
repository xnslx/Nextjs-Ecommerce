import React from 'react'
import Image from 'next/image'

const EmptyState = () => {
    return (
        <div className="mt-12">
            <h1 className="text-base text-center font-bold leading-7 mb-2 font-mono">You need to log in first</h1>
            <Image src="/images/emptystate.png" width={480} height={480} />
        </div>
    )
};

export default EmptyState;
