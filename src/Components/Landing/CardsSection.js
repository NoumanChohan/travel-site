import React from 'react'

const CardsSection = () => {
    return (
        <div className='w-full h-[32%] bg-pink-300  bg-cover bg-center' style={{ clipPath: 'polygon(0% 25%, 100% 0%, 100% 70%, 0% 100%)', backgroundImage: "url('/Images/nat-4.jpg')" }}>
            <div className=' w-full h-full flex justify-center bg-gradient-to-b from-[#016c8a77] to-[#09e3e358]'>
                <div className='h-full w-[80%] mt-[0%] flex justify-between items-center'>
                    <div className='h-[32%] w-[18%] flex flex-col items-center font-sans bg-[#ffffff93] transition-all duration-300 hover:mb-[5%] hover:shadow-lg'>
                        <img className='h-[60px] w-[60px] mt-[15%]' src='/Icons/world.png' />
                        <span className=' h-fit w-fit font-bold mt-[10%]'>EXPLORE THE WORLD</span>
                        <span className=' h-fit w-fit text-center mt-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam</span>
                    </div>
                    <div className='h-[32%] w-[18%] flex flex-col items-center font-sans bg-[#ffffff93] transition-all duration-300 hover:mb-[5%] hover:shadow-lg'>
                        <img className='h-[60px] w-[60px] mt-[15%]' src='/Icons/compas.png' />
                        <span className=' h-fit w-fit font-bold mt-[10%]'>MEET NATURE</span>
                        <span className=' h-fit w-fit text-center mt-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam</span>
                    </div>
                    <div className='h-[32%] w-[18%] flex flex-col items-center font-sans bg-[#ffffff93] transition-all duration-300 hover:mb-[5%] hover:shadow-lg'>
                        <img className='h-[60px] w-[60px] mt-[15%]' src='/Icons/mapwhite.png' />
                        <span className=' h-fit w-fit font-bold mt-[10%]'>FIND YOUR WAY</span>
                        <span className=' h-fit w-fit text-center mt-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam</span>
                    </div>
                    <div className='h-[32%] w-[18%] flex flex-col items-center font-sans bg-[#ffffff93] transition-all duration-300 hover:mb-[5%] hover:shadow-lg'>
                        <img className='h-[60px] w-[60px] mt-[15%]' src='/Icons/heart.png' />
                        <span className=' h-fit w-fit font-bold mt-[10%]'>LIVE A HEALTHIER LIFE</span>
                        <span className=' h-fit w-fit text-center mt-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection
