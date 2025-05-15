import React from 'react'
import FilterSidebar from './FilterSidebar'
import CardGrid from './CardGrid'

const FilterasionSection = () => {
    return (
        <div>
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-5 gap-5 relative">
                    <FilterSidebar />
                    <CardGrid />
                </div>
            </div>
        </div>
    )
}

export default FilterasionSection
