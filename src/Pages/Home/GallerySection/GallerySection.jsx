import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const GallerySection = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-4xl mt-8'>Large Amount of Toys</h1>
                <p className='text-center mb-8'>All of our toys are made from sustainably</p>
            </div>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src="https://i.ibb.co/SsSKwvt/images3.jpg" /></figure>

                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl"
                    data-aos="flip-left">
                    <figure><img src="https://i.ibb.co/Wy2dgQ0/hand-toy-car-my-hand-1253586.jpg" /></figure>

                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img src="https://i.ibb.co/NyTMBb5/old-toy-car-ambulance-1972809.jpg" /></figure>

                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src="https://i.ibb.co/6sxpCyr/istockphoto-469942789-170667a.jpg" /></figure>

                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="flip-right">
                    <figure><img src="https://i.ibb.co/0VRSMB7/depositphotos-94097340-stock-photo-hand-holding-red-toy-car.jpg" /></figure>

                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src="https://i.ibb.co/yNGdvrD/photo-1594787318286-3d835c1d207f.jpg" /></figure>

                </div>
            </div>
        </div>
    );
};

export default GallerySection;