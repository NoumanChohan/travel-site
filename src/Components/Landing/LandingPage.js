'use client'
import LandingFooter from './LandingFooter'
import PopularTours from './PopularTours'
import Adventure from './Adventure'
import CardsSection from './CardsSection'
import FirstPage from './FirstPage'



const LandingPage = () => {



    return (


        <div className='bg-[#F8F8F8] w-[95%] mt-[2%] h-[400vh] flex flex-col '>


            {/* first section */}
            <FirstPage />

            {/* Adventures section */}
            <Adventure />
            {/* $ cards section */}
            <CardsSection />
            {/* popular tours */}
            <PopularTours />
            {/* footer for landing */}
            <LandingFooter />

        </div>


    )
}

export default LandingPage

