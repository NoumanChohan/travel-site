'use client'

import Drawer from '@/Components/Landing/Drawer'
import LandingPage from '@/Components/Landing/LandingPage'
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>                {isDrawerOpen ? <Drawer /> : null}

      <div className=' relative flex flex-col items-center justify-start' >
        <button className="fixed z-10 ml-[86%] mt-[2%] bg-gradient-to-b from-[#016c8a] to-[#09e3e3] rounded-full shadow-lg h-[70px] w-[70px] " onClick={toggleDrawer}>
          {isDrawerOpen ? (
            <Image width={70} height={70} src="/Icons/cross.png" alt="Cross Icon" />
            // <span className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/Icons/cross.png')" }} ></span>

          ) : (
            <Image width={70} height={70} src="/Icons/menu.png" alt="menu Icon" />
          )}
        </button>
        <LandingPage />

      </div>
    </>
  )
}























