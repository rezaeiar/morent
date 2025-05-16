import React from 'react'
import Card from '../../common/Card/Card';
import Link from 'next/link';

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

const PopularCarsGrid = () => {

  const cars: CardProps[] = [
    {
      id: 1,
      name: "Toyota RAV4",
      type: "SUV",
      image: "/images/cars/Car.png",
      transmission: "Automatic",
      tankCapacity: 55,
      seats: 5,
      pricePerDay: 1200000,
      discountedPricePerDay: 980000,
    },
    {
      id: 2,
      name: "Kia Sportage",
      type: "SUV",
      image: "/images/cars/Car.png",
      transmission: "Automatic",
      tankCapacity: 58,
      seats: 5,
      pricePerDay: 1150000,
      discountedPricePerDay: 990000,
    },
    {
      id: 3,
      name: "Peugeot 206",
      type: "Hatchback",
      image: "/images/cars/Car.png",
      transmission: "Manual",
      tankCapacity: 50,
      seats: 5,
      pricePerDay: 450000,
      discountedPricePerDay: 400000,
    },
    {
      id: 4,
      name: "Hyundai Elantra",
      type: "Sedan",
      image: "/images/cars/Car.png",
      transmission: "Automatic",
      tankCapacity: 53,
      seats: 5,
      pricePerDay: 980000,
      discountedPricePerDay: 870000,
    }
  ];


  return (
    <div className='mb-10'>
      <div className="container px-4 mx-auto">
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h3 className='text-secondary-300'>
              Popular Car
            </h3>
            <Link
              href={'/popular'}
              className='text-primary-600 underline text-sm'
            >
              View All
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {
              cars.map((car) => (
                <Card {...car} key={car.id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCarsGrid
