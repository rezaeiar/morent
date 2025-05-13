import React from 'react'
import HeartIcon from '../Header/icons/HeartIcon';
import Image from 'next/image';

type CardProps = {
    id: number,
    name: string;
    type: string;
    image: string;
    transmission: "Manual" | "Automatic";
    tankCapacity: number;
    seats: number;
    pricePerDay: number;
    discountedPricePerDay: number | null;
};

const Card = ({ name, type, image, transmission, tankCapacity, seats, pricePerDay, discountedPricePerDay }: CardProps) => {
    return (
        <div
            className='bg-white rounded-lg p-6 space-y-10 shadow'
        >
            <div className="flex justify-between">
                <div className="">
                    <h2 className='text-base text-secondary-500 font-bold'>
                        {name}
                    </h2>
                    <span className='text-xs text-secondary-300'>
                        {type}
                    </span>
                </div>
                <div className="text-error-600">
                    <HeartIcon />
                </div>
            </div>
            <div className="py-10 relative">
                <Image
                    height={320}
                    width={640}
                    src={image}
                    className='w-full'
                    alt={name}
                />
                <div className="bg-gradient-to-t from-white to-transparent w-full absolute bottom-0 h-32"></div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center w-full text-secondary-300 text-sm">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                            <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                        </svg>
                        <span>
                            {tankCapacity} L
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                        </svg>

                        <span>
                            {transmission}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>

                        <span>
                            {seats} People
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="space-x-1">
                            <span className={'text-sm font-bold'}>
                                ${discountedPricePerDay ? discountedPricePerDay.toLocaleString() : pricePerDay.toLocaleString()}/
                            </span>
                            <span className='text-xs text-secondary-300'>
                                day
                            </span>
                        </div>
                        {
                            discountedPricePerDay &&
                            <div className={`text-xs text-secondary-300 ${discountedPricePerDay ? "line-through" : ""}`}>
                                ${pricePerDay.toLocaleString()}
                            </div>
                        }
                    </div>
                    <button className='px-5 py-2.5 text-sm bg-primary-500 rounded-xl w-fit text-primary-0'>
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
