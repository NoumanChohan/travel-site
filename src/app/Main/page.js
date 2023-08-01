'use client'
import React, { useState } from 'react'

import HotelSelect from '@/Components/Main/Select/HotelSelect'
import FlightSelect from '@/Components/Main/Select/FlightSelect'
import Choose from '@/Components/Main/Choose/Choose'
import CarHire from '@/Components/Main/Choose/CarHire/CarHire'
import Trips from '@/Components/Main/Choose/Trips/Trips'
import Header from '@/Components/Header/Header'

const Main = () => {


    const [showComp, setShowComp] = useState('')
    const handleChange = (prop) => {
        setShowComp(prop)
        console.log(showComp)
    }

    return (
        <>
            <Header />
            <div className='w-full h-[90vh] flex flex-col items-center'>

                <Choose fun={handleChange} />
                {/* <Search /> */}
                {showComp === 'hotel' ? <HotelSelect /> : showComp === 'flight' ? <FlightSelect /> : showComp === 'trips' ? <Trips /> : showComp === 'carhire' ? <CarHire /> : <HotelSelect />}
            </div>
        </>
    )
}

export default Main
