import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <Link href="/productlist">
            <div className="w-10/12 ml-auto mr-auto mt-8">
                <Image src="/images/hero.jpg" width={480} height={480} className="object-cover"/>
            </div>
        </Link>
    )
};

export default Hero;
