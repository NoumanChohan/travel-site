'use client'
import React, { useState } from 'react';
import { Calendar, DatePicker } from 'antd';
import 'antd/dist/reset.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import moment from 'moment';
import './../../../app/styles.css';

const { RangePicker } = DatePicker;

const HotelSelect = () => {

    const [dates, setDates] = useState([])
    console.log(dates)

    const [rooms, setRooms] = useState(0)
    console.log(rooms)

    const [adults, setAdults] = useState(0)
    console.log(adults)

    const [childs, setChilds] = useState(0)
    console.log(adults)

    return (
        <div className="w-[40%] h-[15vh] bg-[#f8f8f8] flex flex-col justify-evenly mt-[5%]">
            <div className="w-full h-[40%] flex items-end  justify-evenly">
                <div className="relative w-[35%] h-[60%] flex  rounded-full focus:outline-none">
                    <RangePicker className='custom-range-picker' size="small" style={{ width: '100%', borderRadius: '20px', outline: "none", }}

                        onChange={(values) => {
                            setDates(values)
                            // setDates(values.map(item => {
                            //     return moment(item).format('DD-MM-YYYY')
                            // }))
                        }} />
                </div>


                {/* Rooms section */}
                <div className="relative w-[25%] h-[60%]  rounded-full flex justify-center items-center">
                    <select className="w-[100%] bg-white border h-full rounded-full pl-4  text-base bg-transparent focus:outline-none  hover:border-black font-sans "
                        onChange={e => setRooms(e.target.value)}

                    >
                        <option value>Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                    </select>
                </div>
            </div>

            <div className="w-full h-[40%] flex items-end  justify-evenly">
                {/* Adults section */}
                <div className="relative w-[35%] h-[60%]  rounded-full flex justify-center items-center">
                    <select className="w-[100%] bg-white border h-full rounded-full pl-4  text-base bg-transparent focus:outline-none hover:border-black  font-sans"
                        onChange={e => setAdults(e.target.value)}

                    >
                        <option value>Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                    </select>
                </div>


                {/* Child section */}
                <div className="relative w-[25%] h-[60%]  rounded-full flex justify-center items-center">
                    <select className="w-[100%] bg-white border h-full rounded-full pl-4  text-base bg-transparent focus:outline-none hover:border-black  font-sans"
                        onChange={e => setChilds(e.target.value)}

                    >
                        <option value>Childs</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                    </select>
                </div>
            </div>

        </div>
    );
};

export default HotelSelect;


<div className="w-full h-[40%] flex items-end bg-pink-200 justify-evenly">
    <div className="relative w-[35%] h-[60%] bg-yellow-200 rounded-full flex justify-center items-center">
        <select
            value={''}
            onChange={''}
            className="w-[100%] bg-red-400 h-full rounded-full pl-4  text-base bg-transparent focus:outline-none  font-sans"
        >
            <option value="" disabled>
                Rooms - 0
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
        </select>
        {/* <img className='h-[20px] w-[20px] ' src='/Icons/shower.png' /> */}





    </div>

    <div className="relative w-[25%] h-[60%] bg-yellow-200 rounded-full flex justify-center items-center">
        <select
            value={''}
            onChange={''}
            className="w-[100%] bg-red-400 h-full rounded-full pl-4  text-base bg-transparent focus:outline-none  font-sans"
        >
            <option value="" disabled>
                Rooms - 0
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
        </select>
        {/* <img className='h-[20px] w-[20px] ' src='/Icons/shower.png' /> */}





    </div>
</div>
























