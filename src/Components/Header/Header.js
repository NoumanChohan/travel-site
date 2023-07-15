import React from 'react'
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'
import Image from 'next/image'


const Header = () => {
    return (
        <div className=' w-full h-[10vh]   flex items-center justify-end font-sans font-bold shadow-sm'>
            <Register />
            <SignIn />
            <Image className=' ml-[10%] mr-[5%] shadow-2xl rounded-full'
                src='/Icons/flying-plane.png' alt='flying-plane-logo'
                height={60}
                width={60} />

        </div>
    )
}

export default Header
