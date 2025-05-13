import React from 'react'

const FilterSidebar = () => {
    return (
        <div className='p-6 bg-white rounded-xl flex flex-col gap-10 shadow sticky top-6 h-fit'>

            <div className="space-y-4">
                <h4 className='text-secondary-300 text-sm'>
                    Type
                </h4>
                <ul className='space-y-3'>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="sedan" />
                        <label htmlFor="sedan" className="text-sm text-secondary-900 cursor-pointer">
                            Sedan <span className='text-secondary-400'>(12)</span>
                        </label>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="suv" />
                        <label htmlFor="suv" className="text-sm text-secondary-900 cursor-pointer">
                            SUV <span className='text-secondary-400'>(8)</span>
                        </label>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="hatchback" />
                        <label htmlFor="hatchback" className="text-sm text-secondary-900 cursor-pointer">
                            Hatchback <span className='text-secondary-400'>(5)</span>
                        </label>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="convertible" />
                        <label htmlFor="convertible" className="text-sm text-secondary-900 cursor-pointer">
                            Convertible <span className='text-secondary-400'>(2)</span>
                        </label>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="pickup" />
                        <label htmlFor="pickup" className="text-sm text-secondary-900 cursor-pointer">
                            Pickup <span className='text-secondary-400'>(4)</span>
                        </label>
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className='text-secondary-300 text-sm'>
                    Capacity
                </h4>
                <ul className='space-y-3'>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="2-person" />
                        <label htmlFor="2-person" className="text-sm text-secondary-900 cursor-pointer">
                            2 Persons <span className='text-secondary-400'>(3)</span>
                        </label>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="4-person" />
                        <label htmlFor="4-person" className="text-sm text-secondary-900 cursor-pointer">
                            4 Persons <span className='text-secondary-400'>(10)</span>
                        </label>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="5-person" />
                        <label htmlFor="5-person" className="text-sm text-secondary-900 cursor-pointer">
                            5 Persons <span className='text-secondary-400'>(7)</span>
                        </label>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <input type="checkbox" id="7plus-person" />
                        <label htmlFor="7plus-person" className="text-sm text-secondary-900 cursor-pointer">
                            7 or more <span className='text-secondary-400'>(2)</span>
                        </label>
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className='text-secondary-300 text-sm'>
                    Price
                </h4>
                <input type="range" className='w-full' min={0} max={100} />
                <span className='text-secondary-500 text-sm font-bold'>
                    Max. $100.00
                </span>
            </div>

        </div>
    )
}

export default FilterSidebar
