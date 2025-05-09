import React from 'react'
import SearchIcon from './SearchIcon'

const SearchBar = () => {
    return (
        <div className='flex rounded-full px-2.5 border border-[#C3D4E9] text-[#596780] justify-between items-center'>
            <div className="flex items-center gap-5">
                <div className="py-2.5">
                    <SearchIcon color='text-[#596780]' />
                </div>
                <input
                    type="text"
                    className='h-full w-80 outline-none placeholder:text-[#596780] text-[#596780] py-2.5'
                    placeholder='Search something here'
                />
            </div>
            <div className="">
                <div className="bg-gray-900 rounded-2xl text-white py-1.5 px-2.5 text-xs">
                    Ctrl + K
                </div>
            </div>
        </div>
    )
}

export default SearchBar
