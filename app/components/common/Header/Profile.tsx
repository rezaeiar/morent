import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
    return (
        <Link
            className='h-7 w-7 lg:h-11 lg:w-11 rounded-full overflow-hidden'
            href={'/profile'}
        >
            <Image
                height={44}
                width={44}
                alt='profile'
                src={"/images/Profil.png"}
            />
        </Link>
    )
}

export default Profile
