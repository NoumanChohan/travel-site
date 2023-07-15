'use client'

import Header from '@/Components/Header/Header'
import Drawer from '@/Components/Landing/Drawer'
import LandingFooter from '@/Components/Landing/LandingFooter'
import LandingPage from '@/Components/Landing/LandingPage'
import Main from '@/Components/Main/Main'
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
            <img className="h-full w-full" src="/Icons/cross.png" alt="Cross Icon" />
          ) : (
            <img className="h-full w-full" src="/Icons/menu.png" alt="Menu Icon" />
          )}
        </button>
        <LandingPage />

      </div>
    </>
  )
}























