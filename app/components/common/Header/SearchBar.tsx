import React from 'react'
import SearchIcon from './icons/SearchIcon'

type SearchBar = {
    type: "MIDDLE" | "END"
}

const SearchBar = ({ type }: SearchBar) => {
    return (
        <div className={`${type === "END" ? "flex lg:hidden mb-6" :"hidden lg:flex"} rounded-xl lg:rounded-full px-2.5 border border-secondary-200/40 justify-between items-center`}>
            <div className="flex items-center gap-3 lg:gap-5">
                <div className="py-2.5 text-secondary-400">
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    className='h-full max-w-80 lg:w-80 outline-none placeholder:text-secondary-400 text-secondary-400 py-2.5'
                    placeholder='Search something here'
                />
            </div>
            <div className="hidden lg:block">
                <div className="bg-secondary-800 rounded-2xl text-primary-0 py-1.5 px-2.5 text-xs">
                    Ctrl + K
                </div>
            </div>
        </div>
    )
}

export default SearchBar
