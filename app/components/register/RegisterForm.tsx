'use client'

import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

type RegisterFormData = z.infer<typeof registerSchema>

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register form submitted:', data)
  }

  return (
    <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='font-bold text-secondary-800 text-xl'>
        Create your account
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

      <div className="space-y-2">
        <label className='text-xs text-secondary-400'>
          Confirm Password
        </label>
        <input
          type="password"
          {...register('confirmPassword')}
          className='w-full border border-secondary-100/40 rounded bg-secondary-100/20 p-3 text-sm outline-none'
          placeholder='Re-enter your password'
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        className='bg-primary-500 hover:bg-primary-600 transition-all w-full text-sm text-white p-3 rounded cursor-pointer'
      >
        Sign up
      </button>

      <span className='h-px w-full bg-secondary-200 block'></span>

      <button
        type="button"
        className='bg-secondary-600 w-full text-sm text-white p-3 rounded'
      >
        Or sign in with Google
      </button>

      <span className='text-secondary-800 space-x-1 text-sm block text-center'>
        <span>Already have an account?</span>
        <Link href="/login" className='text-primary-500 underline'>
          Sign in now
        </Link>
      </span>
    </form>
  )
}

export default RegisterForm
