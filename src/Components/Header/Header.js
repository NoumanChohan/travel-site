import React from 'react'
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'


const Header = () => {
    return (
        <div className=' w-full h-[10vh]   flex items-center justify-end font-sans font-bold shadow-sm'>
            <Register />
            <SignIn />
            <img className='h-[60px] w-[60px] ml-[10%] mr-[5%] shadow-2xl rounded-full' src='Icons/flying-plane.png' />

        </div>
    )
}

export default Header
