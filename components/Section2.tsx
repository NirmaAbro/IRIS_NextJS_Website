import React from 'react';
import Image from 'next/image';
import pic from '../app/picture.png';
import { TiTick } from "react-icons/ti";


function Section2() {
    return (
        <div className='flex justify-center items-center mt-20 '>
            <div className='w-1/2 mt-20'>
                <Image className='justify-center items-center m-auto w-1/2 h-1/2' src={pic} alt="" />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div className='w-full mt-28'>
                    <h1 className='text-4xl font-sans text-left font-bold mb-4 '>
                        WHO WE <span className='text-blue-500 justify-start items-start'>ARE</span>
                    </h1>
                    <h6 className=''>Fostering Growth Through</h6>
                    <h6 className='text-xl font-semibold mb-2'>Comprehensive Education and Training</h6>
                    <h6 className='text-xl font-semibold mb-4'>Services</h6>
                </div>

                <p className='text-base mb-2'>
                    IRIS Education and Training Services is a leading provider of comprehensive services to NGOs, institutes, and individuals in Pakistan.
                </p>
                <p className='text-base'>
                    With a diverse range of offerings such as IT services, research services, training services, technical training services, and educational services, IRIS is committed to promoting integrated sustainability and facilitating growth in various sectors.
                </p>
                <div className='flex w-full m-4'>
                    <TiTick className='bg-green-500 text-white m-2 text-xl rounded-full ' />
                    <p className='p-1'><span className='font-bold p-1'>2,345</span>Success Students </p>

                </div>
                <div className='w-full '>
                    <button className='bg-blue-500 text-white font-bold  justify-center items-center p-3  rounded-full'>Discover More</button>
                </div>

            </div>

        </div>
    );
}

export default Section2;
