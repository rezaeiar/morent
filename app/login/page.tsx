import Image from 'next/image'
import React from 'react'
import Logo from '../components/common/Logo'
import Link from 'next/link'

const page = () => {
    return (
        <div className='grid grid-cols-3 h-screen'>
            <div className="h-screen col-span-2">
                <Image
                    height={2000}
                    width={3000}
                    alt='bg'
                    src={"/images/bg.jpg"}
                    className='h-full object-cover w-full'
                />
            </div>
            <div className="bg-white p-12 space-y-12 flex flex-col h-screen overflow-y-auto">
                <Logo
                    title='morent'
                />
                <form action="" className='space-y-8'>
                    <h3 className='font-bold text-secondary-800 text-xl'>
                        Nice to see you again
                    </h3>

                    <div className="space-y-2">
                        <label htmlFor="" className='text-xs text-secondary-400'>
                            Email
                        </label>
                        <input
                            type="text"
                            className='w-full border border-secondary-100/40 rounded bg-secondary-100/20 p-3 text-sm outline-none'
                            placeholder='Enter you email address'
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="" className='text-xs text-secondary-400'>
                            Password
                        </label>
                        <input
                            type="text"
                            className='w-full border border-secondary-100/40 rounded bg-secondary-100/20 p-3 text-sm outline-none'
                            placeholder='Enter you email password'
                        />
                    </div>

                    <button
                        className='bg-primary-500 w-full text-sm text-white p-3 rounded'
                    >
                        Sign in
                    </button>

                    <span
                        className='h-px w-full bg-secondary-200 block'
                    ></span>

                    <button
                        className='bg-secondary-600 w-full text-sm text-white p-3 rounded'
                    >
                        Or sign in with Google
                    </button>

                    <span
                        className='text-secondary-800 space-x-1 text-sm block text-center'
                    >
                        <span>
                            Dont have an account?
                        </span>
                        <Link
                            href={"/"}
                            className='text-primary-500 underline'
                        >
                            Sign up now
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default page
