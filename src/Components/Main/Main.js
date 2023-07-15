// 'use client'
// import React, { useState } from 'react'
// import HotelSelect from './Select/HotelSelect'
// import FlightSelect from './Select/FlightSelect'
// import Trips from './Choose/Trips/Trips'
// import CarHire from './Choose/CarHire/CarHire'
// import Choose from './Choose/Choose'

// const Main = () => {


//     const [showComp, setShowComp] = useState('')
//     const handleChange = (prop) => {
//         setShowComp(prop)
//         console.log(showComp)
//     }

//     return (
//         <div className='w-full h-[90vh] bg-green-200  flex flex-col items-center'>

//             <Choose fun={handleChange} />
//             {/* <Search /> */}
//             {showComp === 'hotel' ? <HotelSelect /> : showComp === 'flight' ? <FlightSelect /> : showComp === 'trips' ? <Trips /> : showComp === 'carhire' ? <CarHire /> : <HotelSelect />}
//         </div>
//     )
// }

// export default Main



// move in app folder for routing
