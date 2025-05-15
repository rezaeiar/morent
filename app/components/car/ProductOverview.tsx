import React from 'react'
import BannerPrimary from '../home/HeroBanners/banners/BannerPrimary'
import Image from 'next/image'

const ProductOverview = () => {
    return (
        <div className="">
            <div className="container px-4 mx-auto">
                <div className='grid grid-cols-3 gap-6'>
                    <div className="space-y-6">
                        <BannerPrimary />
                        <div className="grid grid-cols-3 gap-6">
                            <div className="">
                                <Image
                                    height={360}
                                    width={640}
                                    alt='BG'
                                    src={"/images/cars/View 2.png"}
                                    className='w-full object-cove'
                                />
                            </div>
                            <div className="">
                                <Image
                                    height={360}
                                    width={640}
                                    alt='BG'
                                    src={"/images/cars/View 2.png"}
                                    className='w-full object-cove'
                                />
                            </div>
                            <div className="">
                                <Image
                                    height={360}
                                    width={640}
                                    alt='BG'
                                    src={"/images/cars/View 2.png"}
                                    className='w-full object-cove'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 p-6 bg-white shadow rounded-xl">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductOverview
