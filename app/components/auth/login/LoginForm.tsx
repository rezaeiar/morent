'use client'

import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icon } from '@iconify/react'
import Button from '../../common/Button'

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginFormData) => {
        console.log('Form Submitted:', data)
    }

    return (
        <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='font-bold text-secondary-800 text-xl'>
                Nice to see you again
            </h3>

            <div className="space-y-2">
                <label className='text-xs text-secondary-400'>
                    Email
                </label>
                <input
                    type="text"
                    {...register('email')}
                    className='w-full border border-secondary-100/40 rounded bg-secondary-100/20 p-3 text-sm outline-none'
                    placeholder='Enter your email address'
                />
                {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className='text-xs text-secondary-400'>
                    Password
                </label>
                <input
                    type="password"
                    {...register('password')}
                    className='w-full border border-secondary-100/40 rounded bg-secondary-100/20 p-3 text-sm outline-none'
                    placeholder='Enter your password'
                />
                {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password.message}</p>
                )}
            </div>
            <Button
                type='submit'
                fullWidth
            >
                Sign in
            </Button>

            <span className='h-px w-full bg-secondary-200 block'></span>
            <Button
                icon={<Icon icon="flat-color-icons:google" width="24" height="24" />}
                fullWidth
                variant='secondary'
            >
                Or sign up with Google
            </Button>

            <span className='text-secondary-800 space-x-1 text-sm block text-center'>
                <span>Don’t have an account?</span>
                <Link href={"/register"} className='text-primary-500 underline'>
                    Sign up now
                </Link>
            </span>
        </form>
    )
}

export default LoginForm
