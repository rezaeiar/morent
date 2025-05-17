"use client"
import React, { useState, ChangeEvent, MouseEvent } from 'react'

type FilterSidebarProps = {
    maxPrice?: number,
    mobileDisplay: boolean,
    changeDisplay: () => void
}

type Filters = {
    type: string[]
    capacity: string[]
    price: number
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ maxPrice = 100, mobileDisplay, changeDisplay }) => {

    const [filters, setFilters] = useState<Filters>({
        type: [],
        capacity: [],
        price: maxPrice
    });

    const [priceTemp, setPriceTemp] = useState<number>(maxPrice);

    const handleCheckboxChange = (category: 'type' | 'capacity', id: string) => {
        setFilters(prev => {
            const current = prev[category];
            const updatedCategory = current.includes(id)
                ? current.filter(item => item !== id)
                : [...current, id];

            return {
                ...prev,
                [category]: updatedCategory
            };
        });
    };

    const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPriceTemp(Number(e.target.value));
    };

    const handleRangeCommit = () => {
        setFilters(prev => ({
            ...prev,
            price: Number(priceTemp)
        }));
    };

    const buildQueryString = (): string => {
        const params = new URLSearchParams();

        if (filters.type.length > 0) {
            params.append('type', filters.type.join(','));
        }

        if (filters.capacity.length > 0) {
            params.append('capacity', filters.capacity.join(','));
        }

        if (filters.price !== maxPrice) {
            params.append('price', filters.price.toString());
        }

        return params.toString();
    };

    const handleApplyFilters = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const queryString = buildQueryString();
        console.log("Query String:", queryString);
        // router.push(`/search?${queryString}`) یا ارسال به API
    };

    return (
        <div className={`p-6 bg-white rounded-xl flex-col gap-10 space-y-6 shadow flex ${mobileDisplay ? "fixed lg:static top-0 left-0 w-full h-screen lg:w-auto lg:h-auto m-0 z-40" : "h-fit sticky top-6 hidden lg:block"} `}>

            {/* Type */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h4 className='text-secondary-300 text-sm'>Type</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 block lg:hidden cursor-pointer text-gray-400" onClick={changeDisplay}>
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                </div>
                <ul className='space-y-3'>
                    {[
                        { id: 'sedan', label: 'Sedan', count: 12 },
                        { id: 'suv', label: 'SUV', count: 8 },
                        { id: 'hatchback', label: 'Hatchback', count: 5 },
                        { id: 'convertible', label: 'Convertible', count: 2 },
                        { id: 'pickup', label: 'Pickup', count: 4 },
                    ].map(({ id, label, count }) => (
                        <li key={id} className='flex gap-2 items-center'>
                            <input
                                type="checkbox"
                                id={id}
                                checked={filters.type.includes(id)}
                                onChange={() => handleCheckboxChange('type', id)}
                            />
                            <label htmlFor={id} className="text-sm text-secondary-900 cursor-pointer">
                                {label} <span className='text-secondary-400'>({count})</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Capacity */}
            <div className="space-y-4">
                <h4 className='text-secondary-300 text-sm'>Capacity</h4>
                <ul className='space-y-3'>
                    {[
                        { id: '2-person', label: '2 Persons', count: 3 },
                        { id: '4-person', label: '4 Persons', count: 10 },
                        { id: '5-person', label: '5 Persons', count: 7 },
                        { id: '7plus-person', label: '7 or more', count: 2 },
                    ].map(({ id, label, count }) => (
                        <li key={id} className='flex gap-2 items-center'>
                            <input
                                type="checkbox"
                                id={id}
                                checked={filters.capacity.includes(id)}
                                onChange={() => handleCheckboxChange('capacity', id)}
                            />
                            <label htmlFor={id} className="text-sm text-secondary-900 cursor-pointer">
                                {label} <span className='text-secondary-400'>({count})</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price */}
            <div className="space-y-4">
                <h4 className='text-secondary-300 text-sm'>Price</h4>
                <input
                    type="range"
                    className='w-full'
                    min={0}
                    max={maxPrice}
                    value={priceTemp}
                    onChange={handleRangeChange}
                    onMouseUp={handleRangeCommit}
                    onTouchEnd={handleRangeCommit}
                />
                <span className='text-secondary-500 text-sm font-bold'>
                    Max. ${priceTemp}.00
                </span>
            </div>

            {/* Apply Button */}
            <button
                onClick={handleApplyFilters}
                className='bg-primary-500 hover:bg-primary-600 text-white text-sm py-2 px-4 rounded-lg transition'
            >
                Apply Filters
            </button>
        </div>
    );
};

export default FilterSidebar;
