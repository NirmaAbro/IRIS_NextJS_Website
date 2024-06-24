import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '../app/sone.png';
import img2 from '../app/sTwo.png';
import img3 from '../app/sThree.png';
import { IoMdContact } from 'react-icons/io';
import { IoIosClock } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            img: img1,
            title: 'Technical Services'
        },
        {
            img: img2,
            title: 'Educational Services'
        },
        {
            img: img3,
            title: 'Career Services'
        }
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='relative bg-white p-4 rounded-xl w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 max-w-full overflow-hidden'>
                <div className='flex justify-center items-center mb-4'>
                    <Image
                        src={data[currentIndex].img}
                        alt={data[currentIndex].title}
                        width={300}
                        height={300}
                        className='rounded-lg shadow-md max-w-full'
                    />
                </div>
                <div className='absolute top-1/2 left-2 transform -translate-y-1/2'>
                    <button onClick={prevSlide} className='text-white bg-gray-800 p-2 rounded-full'>‹</button>
                </div>
                <div className='absolute top-1/2 right-2 transform -translate-y-1/2'>
                    <button onClick={nextSlide} className='text-white bg-gray-800 p-2 rounded-full'>›</button>
                </div>
                <div className='flex justify-center items-center gap-4 mb-4 text-base'>
                    <div className='flex items-center'>
                        <IoMdContact className='text-xl text-green-400' />
                        <p className='text-base ml-1'>50 Students</p>
                    </div>
                    <div className='flex items-center'>
                        <IoIosClock className='text-xl text-green-400' />
                        <p className='text-base ml-1'>8 Hours</p>
                    </div>
                    <div className='flex items-center'>
                        <FaStar className='text-xl text-green-400' />
                        <p className='text-base ml-1'>4.8 reviews</p>
                    </div>
                </div>
                <hr className='text-gray-300 mb-4' />
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-xl mb-2'>{data[currentIndex].title}</p>
                    <button className='bg-blue-600 p-2 px-4 text-base text-white rounded-full'>
                        View Detail
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
