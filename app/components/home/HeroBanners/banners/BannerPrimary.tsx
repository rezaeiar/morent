import Image from 'next/image'
import React from 'react'

const BannerPrimary = () => {
    return (
        <div className='rounded-2xl overflow-hidden p-6 relative'>
            <Image
                height={360}
                width={640}
                alt='BG'
                src={"/images/ads/Ads 1.svg"}
                className='h-full w-full object-cover absolute top-0 left-0'
            />
            <div className="flex flex-col justify-center z-10 relative text-primary-0 gap-4">
                <h2 className='text-xl lg:text-2xl font-bold'>
                    The Best Platform <br />
                    for Car Rental
                </h2>
                <p className='text-sm lg:text-base'>
                    Ease of doing a car rental safely and <br />
                    reliably. Of course at a low price.
                </p>
                <button className='px-5 py-2.5 text-sm bg-primary-500 rounded-xl w-fit'>
                    Rental Car
                </button>
                <Image
                    height={620}
                    width={1080}
                    alt='BG'
                    src={"/images/cars/image 7.png"}
                    className='w-full sm:w-2/3 self-center'
                />
            </div>
        </div>
    )
}

export default BannerPrimary
