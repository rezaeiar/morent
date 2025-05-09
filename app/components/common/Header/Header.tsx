import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Profile from './Profile'
import Tools from './Tools'

const Header = () => {
    return (
        <div className='border-b border-secondary-200/40 bg-white'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center px-8 py-10">
                    <div className="flex items-center gap-16">
                        <Logo
                            title='morent'
                        />
                        <SearchBar />
                    </div>
                    <div className="flex gap-5 items-center text-secondary-400">
                        <Tools />
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
