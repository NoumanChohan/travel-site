'use client'
import React from 'react'
import Hotels from './Hotels/Hotels';
import Flight from './Flight/Flight';
import Trips from './Trips/Trips';
import CarHire from './CarHire/CarHire';

const Choose = (prop) => {
    const func = prop.fun




    return (
        <div className='w-[40%] h-[30vh]  mt-[5%]  flex flex-col  font-sans'>
            <p className='w-fit h-fit  text-4xl  mx-auto  font-bold'>What you are looking for?</p>
            <div className='w-full h-[70%] bg-[#f8f8f8] flex justify-between'>

                <Hotels show={func} />

                <Flight show={func} />

                <Trips />

                <CarHire />
            </div>
        </div >
    )
}

export default Choose
