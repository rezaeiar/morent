import React from 'react'
import Card from '../common/Card/Card';

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

const CardGrid = () => {

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
        },
        {
            id: 5,
            name: "BMW X5",
            type: "SUV",
            image: "/images/cars/Car.png",
            transmission: "Automatic",
            tankCapacity: 85,
            seats: 5,
            pricePerDay: 3500000,
            discountedPricePerDay: null, // Members only
        },
        {
            id: 6,
            name: "Nissan Juke",
            type: "Crossover",
            image: "/images/cars/Car.png",
            transmission: "Automatic",
            tankCapacity: 46,
            seats: 5,
            pricePerDay: 950000,
            discountedPricePerDay: 850000,
        },
        {
            id: 7,
            name: "Renault Logan",
            type: "Sedan",
            image: "/images/cars/Car.png",
            transmission: "Manual",
            tankCapacity: 50,
            seats: 5,
            pricePerDay: 550000,
            discountedPricePerDay: 480000,
        },
        {
            id: 8,
            name: "Mazda 3",
            type: "Sedan",
            image: "/images/cars/Car.png",
            transmission: "Automatic",
            tankCapacity: 55,
            seats: 5,
            pricePerDay: 1100000,
            discountedPricePerDay: 950000,
        },
        {
            id: 9,
            name: "Samand LX",
            type: "Sedan",
            image: "/images/cars/Car.png",
            transmission: "Manual",
            tankCapacity: 66,
            seats: 5,
            pricePerDay: 480000,
            discountedPricePerDay: 420000,
        },
        {
            id: 10,
            name: "Chevrolet Camaro",
            type: "Coupe",
            image: "/images/cars/Car.png",
            transmission: "Automatic",
            tankCapacity: 72,
            seats: 4,
            pricePerDay: 4000000,
            discountedPricePerDay: null, // Members only
        },
        {
            id: 11,
            name: "Suzuki Vitara",
            type: "SUV",
            image: "/images/cars/Car.png",
            transmission: "Manual",
            tankCapacity: 66,
            seats: 5,
            pricePerDay: 1250000,
            discountedPricePerDay: 1080000,
        },
        {
            id: 12,
            name: "Pride 131",
            type: "Hatchback",
            image: "/images/cars/Car.png",
            transmission: "Manual",
            tankCapacity: 37,
            seats: 5,
            pricePerDay: 300000,
            discountedPricePerDay: 270000,
        },
    ];


    return (
        <div className="grid grid-cols-3 gap-8 col-span-4">
            {
                cars.map((car) => (
                    <Card {...car} key={car.id} />
                ))
            }
        </div>
    )
}

export default CardGrid
