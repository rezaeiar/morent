import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='pt-12 bg-white'>
            <div className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <Logo
                                title='morent'
                            />
                            <p className='text-secondary-300'>
                                Our vision is to provide convenience <br />
                                and help increase your sales business.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-y-10 lg:flex justify-between">
                            <div className='flex flex-col gap-2 lg:gap-5'>
                                <h3 className='mb-4'>
                                    About
                                </h3>
                                <ul className='text-gray-400 space-y-4 text-sm'>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            How it works
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Featured
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Partnership
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Bussiness Relation
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2 lg:gap-5'>
                                <h3 className='mb-4'>
                                    Community
                                </h3>
                                <ul className='text-gray-400 space-y-4 text-sm'>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Podcast
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Invite a friend
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2 lg:gap-5'>
                                <h3 className='mb-4'>
                                    Socials
                                </h3>
                                <ul className='text-gray-400 space-y-4 text-sm'>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Discord
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/'}>
                                            Facebook
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 mt-8 text-sm border-t border-secondary-200/40 flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
                        <p className=''>
                            ©2022 MORENT. All rights reserved
                        </p>
                        <ul className='flex items-center gap-4 justify-between lg:justify-start -order-1 lg:order-1'>
                            <li>
                                <Link href={'/'}>
                                    Privacy & Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    Terms & Condition
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
