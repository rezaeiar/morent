import React from 'react'
import BannerPrimary from './banners/BannerPrimary'
import BannerSecondary from './banners/BannerSecondary'

const HeroBanners = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    <BannerPrimary />
                    <BannerSecondary />
                </div>
            </div>
        </div>
    )
}

export default HeroBanners
