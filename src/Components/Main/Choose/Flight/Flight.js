'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Flight = (prop) => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        setIsButtonClicked(true);
        prop.show('flight')
    };
    const handleMouseLeave = () => {
        setIsButtonClicked(false);
    };


    return (
        <div className='h-full w-[22%]  flex flex-col justify-around items-center'>
            <button onClick={handleClick} onMouseLeave={handleMouseLeave} className={` w-[60px] h-[60px] rounded-full shadow-2xl flex justify-center items-center ${isButtonClicked ? 'bg-gradient-to-b from-[#016c8a] to-[#09e3e3]' : 'bg-white'} 
                }`}><Image height={30} width={30} src='/Icons/flight.png' alt='flight icon' /></button>
            <p className='w-full h-fi font-bold  text-center '>Flight</p>
        </div>
    )
}

export default Flight
