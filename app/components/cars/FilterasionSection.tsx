"use client"
import React, { useState } from 'react'
import FilterSidebar from './FilterSidebar'
import CardGrid from './CardGrid'
import CardDiisplayButton from './CardDiisplayButton'

const FilterasionSection = () => {

    const [showFilterMobile, setShowFilterMobile] = useState(false)

    const changeFilterDisplay = () => {

        setShowFilterMobile(prev => !prev)
    }
    return (
        <div>
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
                    <CardDiisplayButton changeDisplay={changeFilterDisplay} />
                    <FilterSidebar mobileDisplay={showFilterMobile} changeDisplay={changeFilterDisplay} />
                    <CardGrid />
                </div>
            </div>
        </div>
    )
}

export default FilterasionSection
