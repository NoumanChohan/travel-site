import Link from 'next/link'
import React from 'react'

const FirstPage = () => {
    return (
        <div className=' w-full h-[24%]    bg-transparent bg-cover bg-center 	' style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 70%, 0 100%)', backgroundImage: "url('/Images/hero-small.jpg')", }}>
            <div id='firstpage' className=' h-full w-full flex flex-col bg-gradient-to-b from-[#016c8a77] to-[#09e3e358] transition-all duration-500'
            >
                {/* header image */}
                <div className=" relative w-full h-[10%] flex justify-between items-center">
                    <img className="h-[70px] w-[70px] ml-[2%]" src="/Icons/flying-plane.png" alt="Flying Plane Icon" />





                </div>
                {/* outdoor section */}
                <div className=' w-full h-[40%]  mt-[5%] flex flex-col gap-5 items-center justify-center'>
                    <span className='animate-button w-fit h-fit font-sans font-bold text-7xl  text-white tracking-widest hover:inline-block hover:transition-all hover:duration-700  hover:translate-y-[-4px]  hover:scale-x-110'>OUTDOORS</span>
                    <span className='animate-button w-fit h-fit font-sans text-4xl text-white tracking-widest hover:inline-block hover:transition-all hover:duration-700   hover:translate-y-[-4px]  hover:scale-x-110'>is where life happen</span>
                    <Link href='popular_tours' onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById('popular_tours');
                        section.scrollIntoView({ behavior: 'smooth' });
                    }}><button className='animate-button font-sans rounded-full bg-gradient-to-b from-[#016c8a] to-[#09e3e3] text-white text-3xl w-[300px] h-[70px] mt-[2%] shadow-lg '>Discover Our Tours</button></Link>
                </div>


            </div>

        </div>
    )
}

export default FirstPage
