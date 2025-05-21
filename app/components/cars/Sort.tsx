import React from 'react'

const Sort = () => {
    return (
        <div className="p-6 rounded-lg bg-white mb-5 shadow grid grid-cols-3">
            <div className="flex flex-col gap-2">
                <h6 className='font-bold'>
                    Locations
                </h6>
                <div className="flex items-center gap-2">
                    <span className='text-sm text-secondary-400'>
                        Select your city
                    </span>
                    -
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h6 className='font-bold'>
                    Date
                </h6>
                <div className="flex items-center gap-2">
                    <span className='text-sm text-secondary-400'>
                        Select your date
                    </span>
                    -
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h6 className='font-bold'>
                    Time
                </h6>
                <div className="flex items-center gap-2">
                    <span className='text-sm text-secondary-400'>
                        Select your time
                    </span>
                    -
                </div>
            </div>
        </div>
    )
}

export default Sort
