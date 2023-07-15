'use client'

import React, { useState } from 'react'

const SignIn = () => {

    const [open, setOpen] = useState(false);

    const SignIn = () => {
        setOpen(!open);
    };


    return (
        <>
            <button onClick={SignIn} className='w-[8%] h-[60%] bg-gradient-to-b from-[#016c8a] to-[#09e3e3] shadow-2xl text-white rounded-full hover:scale-110 transform transition-all duration-200'>Sign In

            </button>

            <div
                className={`flex items-center justify-center  backdrop-blur-sm  fixed top-0 left-0 right-0 bottom-0 bg-opacity-50  bg-black z-50 transition-transform duration-500  ${open ? 'scale-100' : 'scale-0'
                    }`}
                onClick={SignIn}
            >
                <div
                    className='w-[20%] h-[50%] p-8 rounded-3xl bg-black  bg-opacity-50   flex flex-col justify-center items-center '

                    onClick={(e) => e.stopPropagation()}
                >
                    <form >
                        {/* <input
                            type="text"
                            placeholder="Name"
                            className="w-full mb-4 p-2 border border-gray-300 rounded-xl "
                        /> */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full mb-4 p-2 border border-gray-300 rounded-xl shadow-2xl "
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full mb-4 p-2 border border-gray-300 rounded-xl shadow-2xl "
                        />
                        {/* <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full mb-4 p-2 border border-gray-300 rounded-xl"
                        /> */}
                        <button
                            type="submit"
                            className="w-[50%] bg-gradient-to-b from-[#016c8a] to-[#09e3e3] text-white py-2 px-4 rounded-xl shadow-2xl "
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn

// bg-gradient-to-b from-[#016c8a] to-[#09e3e3
//     bg-gradient-to-b from-[#016c8a] to-[#09e3e3]