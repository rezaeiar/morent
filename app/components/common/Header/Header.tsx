import React from 'react'
import Logo from '../Logo'
import SearchBar from './SearchBar'
import Profile from './Profile'
import Tools from './Tools'

const Header = () => {
    return (
        <div className='border-b border-secondary-200/40 bg-white'>
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-center py-5 lg:py-10">
                    <div className="flex items-center gap-16">
                        <Logo
                            title='morent'
                        />
                        <SearchBar type='MIDDLE' />
                    </div>
                    <div className="flex gap-5 items-center text-secondary-400">
                        <Tools />
                        <Profile />
                    </div>
                </div>
                <SearchBar type='END' />
            </div>
        </div>
    )
}

export default Header
