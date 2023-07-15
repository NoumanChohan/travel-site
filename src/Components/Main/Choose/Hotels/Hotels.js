'use client'
import React, { useState } from 'react'
import Select from '../../Select/HotelSelect';
import HotelSelect from '../../Select/HotelSelect';
import Image from 'next/image';

const Hotels = (prop) => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        setIsButtonClicked(true);
        prop.show('hotel')
    };
    const handleMouseLeave = () => {
        setIsButtonClicked(false);
    };


    return (

        <div className='h-full w-[22%]  flex flex-col justify-around  items-center'>
            <button onClick={handleClick} onMouseLeave={handleMouseLeave} className={` w-[60px] h-[60px] rounded-full shadow-2xl flex justify-center items-center ${isButtonClicked ? 'bg-gradient-to-b from-[#016c8a] to-[#09e3e3]' : 'bg-white'} 
                }`}>
                {/* <img className='h-[30px] w-[30px]' src='/Icons/hotels.png' /> */}
                <Image height={30} width={30} className="" alt='hotel-icon' src="/Icons/hotels.png" />
            </button>
            <p className='w-full h-fit font-bold text-center  '>Hotels</p>
            {/* {isButtonClicked === true ? <HotelSelect /> : null} */}

        </div>



    )
}

export default Hotels
