import Link from 'next/link'
import React from 'react'

const PopularTours = () => {
    return (
        <div id='popular_tours' className='w-full h-[27%] flex flex-col items-center '>
            {/* popular tours */}
            <span className='w-fit h-fit font-sans font-bold text-5xl hover:inline-block hover:transition-all hover:duration-700    hover:translate-y-[-8px] hover:translate-x-[-8px] '>MOST POPULAR TOURS</span>
            {/* cards */}
            <div className='w-full h-[55%] mt-[2%] flex justify-evenly items-center '>
                {/*1st card */}
                <div className='card '>
                    {/* front side */}
                    <div className='front bg-gradient-to-b from-[#016c8a] to-[#09e3e3]'>
                        <img className='h-[40%] w-full bg-white' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)' }} src='/Images/card1.jpg' />
                        <span className=' h-fit w-fit font-bold mt-[10%]'>SEA EXPLORER</span>
                        <span className=' h-fit w-fit text-center mt-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam</span>
                    </div>
                    {/* back side */}
                    <div className='back bg-gradient-to-b from-[#016c8a] to-[#09e3e3]'>
                        <span className='font-sans font-bold text-3xl'>Back side</span>
                    </div>
                </div>


                {/* 2nd card */}

                <div className='card'>
                    {/* front side */}
                    <div className='front bg-gradient-to-b from-[#016c8a] to-[#09e3e3]'>
                        <img className='h-[40%] w-full bg-white ' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)' }} src='/Images/card1.jpg' />
                        <span className=' h-fit w-fit font-bold mt-[10%]'>SEA EXPLORER</span>
                        <span className=' h-fit w-fit text-center mt-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam</span>
                    </div>
                    {/* back side */}
                    <div className='back bg-gradient-to-b from-[#016c8a] to-[#09e3e3]'>
                        <span className='font-sans font-bold text-3xl'>Back side</span>
                    </div>
                </div>


                {/* 3rd card */}

                <div className='card'>
                    {/* front side */}
                    <div className='front bg-gradient-to-b from-[#016c8a] to-[#09e3e3]'>
                        <img className='h-[40%] w-full bg-white' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)' }} src='/Images/card1.jpg' />
                        <span className=' h-fit w-fit font-bold mt-[10%]'>SEA EXPLORER</span>
                        <span className=' h-fit w-fit text-center mt-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam</span>
                    </div>
                    {/* back side */}
                    <div className='back bg-gradient-to-b from-[#016c8a] to-[#09e3e3]'>
                        <span className='font-sans font-bold text-3xl'>Back side</span>
                    </div>
                </div>
            </div>
            <Link href='/Main' className='h-[5%] w-[10%] rounded-full mt-[10%] text-white flex justify-center items-center font-sans font-bold shadow-lg bg-gradient-to-b from-[#016c8a] to-[#09e3e3]'>Book Now</Link>
        </div>
    )
}

export default PopularTours
