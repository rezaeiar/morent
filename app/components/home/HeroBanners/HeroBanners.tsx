import React from 'react'
import Banner from './banners/Banner'

const HeroBanners = () => {
  return (
    <div className="mb-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <Banner
            order={1}
            title={
              <>
                The Best Platform <br /> for Car Rental
              </>
            }
            description={
              <>
                Ease of doing a car rental safely and <br />
                reliably. Of course at a low price.
              </>
            }
            buttonLabel="Rental Car"
            buttonHref="/rental"
            carImage="/images/cars/image 7.png"
          />

          <Banner
            order={2}
            title={
              <>
                Easy & Quick <br /> Car Booking
              </>
            }
            description={
              <>
                Book your car anytime <br />
                and anywhere with just one click.
              </>
            }
            buttonLabel="Book Now"
            buttonHref="/booking"
            carImage="/images/cars/image 8.png"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroBanners
