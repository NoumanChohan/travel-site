'use client'
import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Select } from 'antd';



const FlightSelect = () => {
    const [cities, setCities] = useState([]);
    const [departureCity, setDepartureCity] = useState('');
    const [arrivalCity, setArrivalCity] = useState('');

    console.log(departureCity)





    const fetchCities = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = response.data;
            setCities(users);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {


        fetchCities();
    }, []);

    const handleDepartureChange = (value) => {
        setDepartureCity(value);
    };

    const handleArrivalChange = (value) => {
        setArrivalCity(value);
    };

    return (
        <div className="w-[40%] h-[25vh] bg-red-300 flex flex-col mt-[5%]">
            <div className="w-full h-[50%] flex flex-col bg-green-200  justify-evenly font-sans">
                {/* Departure city */}
                <Select
                    className="w-[25%] bg-white border hover:border-black  h-fit rounded-full text-base bg-transparent focus:outline-none"
                    onChange={handleDepartureChange}
                    placeholder="Select Departure"
                    showSearch={true}
                    allowClear={true}
                >

                    {cities.map((city, index) => (
                        <Select.Option key={index} value={city.name}>
                            {city.name}
                        </Select.Option>
                    ))}
                </Select>


                {/* Arrival city */}
                <Select
                    className="w-[25%] bg-white border hover:border-black  h-fit rounded-full  text-base bg-transparent focus:outline-none"
                    onChange={handleArrivalChange}
                    placeholder="Select Arival"
                    showSearch={true}
                    allowClear={true}
                >

                    {cities.map((city, index) => (
                        <Select.Option key={index} value={city.name}>
                            {city.name}
                        </Select.Option>
                    ))}
                </Select>



            </div>
        </div>
    );
};

export default FlightSelect;


