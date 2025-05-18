import Button from '@/app/components/common/Button'
import Image from 'next/image'
import React from 'react'

type BannerProps = {
  title: React.ReactNode
  description: React.ReactNode
  buttonLabel: string
  buttonHref?: string
  carImage: string
  order: number // فقط این prop مشخص می‌کنه بنر چندمه
}

const Banner = ({
  title,
  description,
  buttonLabel,
  buttonHref = '#',
  carImage,
  order,
}: BannerProps) => {
  const bgImage =
    order === 1
      ? '/images/ads/Ads 1.svg'
      : '/images/ads/Ads 2.svg' // فقط همین شرط

  return (
    <div className="rounded-2xl overflow-hidden p-6 relative">
      <Image
        height={360}
        width={640}
        alt="Background"
        src={bgImage}
        className="h-full w-full object-cover absolute top-0 left-0"
      />

      <div className="flex flex-col justify-center z-10 relative text-primary-0 gap-4">
        <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
        <p className="text-sm lg:text-base">{description}</p>

        <Button href={buttonHref}>{buttonLabel}</Button>

        <Image
          height={620}
          width={1080}
          alt="Car Image"
          src={carImage}
          className="w-full sm:w-2/3 self-center"
        />
      </div>
    </div>
  )
}

export default Banner
