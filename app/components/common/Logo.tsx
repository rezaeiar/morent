import Link from 'next/link'
import React from 'react'

type LogoProps = {
    title: string
}

const Logo = ({ title }: LogoProps) => {
    return (
        <Link href={"/"} className='text-xl text-primary-500 font-bold'  >
            {title.toUpperCase()}
        </Link>
    )
}

export default Logo
