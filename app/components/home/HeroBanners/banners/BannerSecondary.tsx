import Image from 'next/image'
import React from 'react'

const BannerSecondary = () => {
    return (
        <div className='rounded-2xl overflow-hidden p-6 relative'>
            <Image
                height={360}
                width={640}
                alt='BG'
                src={"/images/ads/Ads 2.svg"}
                className='h-full w-full object-cover absolute top-0 left-0'
            />
            <div className="flex flex-col justify-center z-10 relative text-primary-0 gap-4">
                <h2 className='text-2xl font-bold'>
                    Easy way to rent a <br />
                    car at a low price
                </h2>
                <p>
                    Providing cheap car rental services <br />
                    and safe and comfortable facilities.
                </p>
                <button className='px-5 py-2.5 text-sm bg-information-500 rounded-xl w-fit'>
                    Rental Car
                </button>
                <Image
                    height={620}
                    width={1080}
                    alt='BG'
                    src={"/images/cars/image 8.png"}
                    className='w-2/3 self-center'
                />
            </div>
        </div>
    )
}

export default BannerSecondary
