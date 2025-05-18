import ProductOverview from '@/app/components/cars/car/ProductOverview'
import Reviews from '@/app/components/cars/car/Reviews'
import PopularCarsGrid from '@/app/components/home/PopularCarsGrid/PopularCarsGrid'
import React from 'react'

const page = () => {
    return (
        <>
            <ProductOverview />
            <Reviews />
            <PopularCarsGrid />
        </>
    )
}

export default page
