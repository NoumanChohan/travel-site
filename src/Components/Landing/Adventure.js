import React from 'react'

const Adventure = () => {
    return (
        <div className='w-full h-[16%]  mt-[0%] flex flex-col justify-evenly items-center' style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <div className='animate-button w-fit h-[10%]  text-5xl font-sans font-bold tracking-widest hover:inline-block hover:transition-all hover:duration-700   hover:translate-y-[-8px]  hover:translate-x-[-8px]'>EXCITING TOURS FOR ADVENTUROUS PEOPLE</div>
            <div className=' w-[80%] h-[75%]  flex'>
                <div className='w-[40%] h-full gap-4  flex flex-col justify-center'>
                    <span className='h-fit w-fit font-sans font-bold  text-lg'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</span>
                    <span className='h-fit w-fit font-sans '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</span>
                    <span className='h-fit w-fit font-sans font-bold  text-lg'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</span>
                    <span className='h-fit w-fit font-sans '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</span>
                </div>
                <div className='w-[60%] h-full flex  relative'>
                    <div className='h-[50%] w-[40%] ml-[15%] mt-[5%] transition-all duration-300 hover:scale-110 hover:z-10 bg-cover bg-center' style={{ backgroundImage: "url('/Images/nat-1.jpg')" }}></div>
                    <div className='h-[50%] w-[40%] absolute ml-[50%] mt-[10%] transition-all duration-300 hover:scale-110 hover:z-10 bg-cover bg-center' style={{ backgroundImage: "url('/Images/nat-2.jpg')" }}></div>
                    <div className='h-[50%] w-[40%] absolute mt-[20%] ml-[30%] transition-all duration-300 hover:scale-110 hover:z-10 bg-cover bg-center' style={{ backgroundImage: "url('/Images/nat-3.jpg')" }}></div>
                </div>
            </div>
        </div>
    )
}

export default Adventure
