import React from 'react'
import Image from 'next/image'
import Logo from '../common/Logo'
import RegisterForm from './RegisterForm'

const RegisterFormContent = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 h-screen'>
            <div className="h-screen lg:col-span-2 hidden md:block">
                <Image
                    height={2000}
                    width={3000}
                    alt='bg'
                    src={"/images/bg2.jpg"}
                    className='h-full object-cover w-full'
                />
            </div>
            <div className="bg-white p-6 md:p-12 space-y-12 flex flex-col h-screen overflow-y-auto">
                <Logo
                    title='morent'
                />
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterFormContent
