'use client'
import React, { useState } from 'react';

const Register = () => {
    const [open, setOpen] = useState(false);

    const register = () => {
        setOpen(!open);
    };

    return (
        <>
            <button
                onClick={register}
                className="w-[10%] h-fit mr-[5%] "
            >
                Register
            </button>
            <div
                className={`flex items-center justify-center  backdrop-blur-sm  fixed top-0 left-0 right-0 bottom-0 bg-opacity-50  bg-black z-50 transition-transform duration-500  ${open ? 'scale-100' : 'scale-0'
                    }`}
                onClick={register}
            >
                <div
                    className='w-[20%] h-[50%] p-8 rounded-3xl bg-black  bg-opacity-50  flex flex-col justify-center items-center '

                    onClick={(e) => e.stopPropagation()}
                >
                    <form >
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full mb-4 p-2 border border-gray-300 rounded-xl shadow-2xl "
                        />
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
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full mb-4 p-2 border border-gray-300 rounded-xl shadow-2xl "
                        />
                        <button
                            type="submit"
                            className="w-[50%] bg-gradient-to-b from-[#016c8a] to-[#09e3e3] text-white py-2 px-4 rounded-xl shadow-2xl "
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;















































// import React, { useState } from 'react'

// const Register = () => {


//     const [open, setOpen] = useState(false)

//     const register = () => {
//         setOpen(!open)
//     }


//     return (
//         <>
//             <button onClick={register} type='text' className='w-[25%] h-[70%]   '>Register

//             </button>
//             {open && (

//                 <form className='mt-[10vh] w-[90%] h-[80%] bg-yellow-200'>
//                     <input type="text" placeholder="Name" />
//                     <input type="email" placeholder="Email" />
//                     <input type="password" placeholder="Password" />
//                     <input type="password" placeholder="Confirm Password" />
//                     <button type="submit">Submit</button>
//                 </form>

//             )}
//         </>
//     )
// }

// export default Register
