import React from 'react'

const Drawer = () => {
    return (
        <div className='fixed z-10  h-[100vh] w-[100%]  shadow  bg-cover bg-center' style={{ backgroundImage: "url('/Images/nat-4.jpg')", }}>
            <div className="h-full w-full font-sans font-bold text-3xl text-white bg-gradient-to-r from-[#09384487] to-[#35adad] flex flex-col items-center justify-center gap-4">
                <button className="h-fit w-fit border-b-2 border-transparent animate-button">ABOUT</button>
                <button className="h-fit w-fit border-b-2 border-transparent animate-button">BENEFITS</button>
                <button className="h-fit w-fit border-b-2 border-transparent animate-button">PRICING</button>
            </div>

        </div>
    )
}

export default Drawer

