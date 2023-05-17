import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
 

const Banner = () => {
    useEffect(()=>{
        Aos.init({duration: 3000})
    },[])
    return (
        <div className='max-w-6xl mx-auto mb-2'>
            <div className=" min-h-screen bg-sky-100 relative"  >
                <div className=" "></div>
                <div className=" ">
                    <div className="absolute top-40 left-20" data-aos="fade-down">
                       <h1 className='font-bold text-4xl text-sky-600'>Welcome to the <br /><span className=''>toy cars world____</span> </h1>
                       <br />
                       <br />
                       <p className='text-sky-600'>Check out our toy car with name selection for the very best <br /> in unique or custom, handmade pieces from our shops.</p>
                    </div>
                    <div className='w-96 absolute top-20 right-8' data-aos="fade-left">
                        <img src="https://i.ibb.co/B37nQxf/img-3.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;