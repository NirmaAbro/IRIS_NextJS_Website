import React from 'react';
import Image from 'next/image';
import img1 from "../app/sone.png";
import img2 from "../app/sTwo.png";
import img3 from "../app/sThree.png";
import { IoMdContact } from "react-icons/io";
import { IoIosClock } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    centerMode: true,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const data = [
        {
            img: img1,
            title: "Technical Services"
        },
        {
            img: img2,
            title: "Educational Services"
        },
        {
            img: img3,
            title: "Career Services"
        }
    ];

    return (
        <div className='w-full flex justify-center'>
            <div className='mt-20 bg-white p-4 rounded-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3'>
                <Slider {...settings}>
                    {
                        data.map((d, index) => (
                            <div key={index} className='p-3'>
                                <div className='flex justify-center items-center mb-2'>
                                    <Image src={d.img} alt={d.title} width={300} height={300} />
                                </div>
                                <div className='flex justify-center items-center gap-4 mb-2 text-base whitespace-nowrap'>
                                    <div className='flex items-center max-w-xs overflow-hidden text-ellipsis'>
                                        <IoMdContact className='text-2xl text-green-400' />
                                        <p className='text-base ml-1'>50 Students</p>
                                    </div>
                                    <div className='flex items-center max-w-xs overflow-hidden text-ellipsis'>
                                        <IoIosClock className='text-2xl text-green-400' />
                                        <p className='text-base ml-1'>8 Hours</p>
                                    </div>
                                    <div className='flex items-center max-w-xs overflow-hidden text-ellipsis'>
                                        <FaStar className='text-2xl text-green-400' />
                                        <p className='text-base ml-1'>4.8 reviews</p>
                                    </div>
                                </div>
                                <div className='justify-center'><hr className='text-gray-500' /></div>
                                <div className='mt-3 flex flex-col items-center'>
                                    <p className='font-bold text-xl'>{d.title}</p>
                                    <button className='bg-blue-600 p-2 px-4 text-base text-white rounded-full mt-2'>View Detail</button>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default ImageSlider;
