import Link from 'next/link'
import React from 'react'

const LandingFooter = () => {
    return (
        <div className='w-full h-[50vh] flex justify-center bg-white'>
            <div className='w-[80%] h-full flex justify-between'>
                <div className='w-[35%] h-full flex flex-col gap-2 justify-center font-bold text-lg items-center font-sans '>
                    <button className='w-fit h-fit hover:border-b-2 border-black'>COMPANY</button>
                    <button className='w-fit h-fit hover:border-b-2 border-black'>CONTACT US</button>
                    <button className='w-fit h-fit hover:border-b-2 border-black'>CARRERS</button>
                    <button className='w-fit h-fit hover:border-b-2 border-black'>PRIVACY POLICY</button>
                    <button className='w-fit h-fit hover:border-b-2 border-black'>TERMS</button>
                </div>
                <div className='w-[15%] h-full flex justify-center items-center font-sans font-bold '><Link href='firstpage' onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById('firstpage');
                    section.scrollIntoView({ behavior: 'smooth' });
                }}><div className="h-[70px] w-[70px] ml-[2%] bg-cover bg-center" style={{ backgroundImage: "url('/Icons/flying-plane.png')" }} ></div></Link></div>
                <div className='w-[35%] h-full flex flex-col justify-center items-end b'>
                    <div className='border-t-2 w-[80%] border-black'></div>
                    <span className='w-[80%] mt-[5%] h-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur </span>
                </div>
            </div>
        </div >
    )
}

export default LandingFooter

