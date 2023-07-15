import React from 'react';

const CarHire = () => {
    return (
        <div className="h-full w-[22%]  flex flex-col justify-around items-center ">
            <button className="w-[60px] h-[60px]  rounded-full shadow-2xl flex justify-center items-center">
                <img className="h-[30px] w-[30px]" src="/Icons/car.png" />
            </button>
            <p className="w-full h-fi font-bold  text-center">Car hire</p>
        </div>
    );
};

export default CarHire;

