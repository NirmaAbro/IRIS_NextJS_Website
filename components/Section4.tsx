import React from 'react';
import ImageSlider from '@/components/ImageSlider';

function Section4() {
    return (
        <div className='bg-[#4285F4] w-full overflow-x-hidden'>
            <div className='w-full flex flex-col m-8 mt-56 justify-center items-center z-10 text-left text-wrap md:px-2 whitespace-nowrap'>
                <h5 className='font-bold text-3xl text-white'>Our <span className='text-[#022061]'>Courses</span></h5>
                <p className='text-left text-xl font-bold mb-4 text-white'>Elevate Your Experience with Our Services</p>
                <p className='text-left text-base text-white'>
                    Elevate Your Experience with Our Services Experience a new standard of excellence with Iris Education & Training Services.
                    Our services, spanning research, IT, training, and education, are meticulously designed to surpass expectations.
                    At the heart of our commitment is a passion for innovation, bespoke solutions, and a relentless pursuit of your success.
                </p>
            </div>
            <ImageSlider />
        </div>
    );
}

export default Section4;