import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Category = () => {
    const [activeTab, setActiveTab] = useState("");
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


    const handleTabClick = (tab) => {
        setActiveTab(tab)
    };

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    };

    return (
        <div className='bg-slate-400 max-w-5xl mx-auto'>
            <div className='ml-80 my-5'>
                <div
                    onClick={() => handleTabClick("police")}
                    className={`tab  tab2 police ${activeTab == "police" ? " bg-sky-600 text-black font-semibold" : ""
                        }`}

                >
                    Police Car
                    <div className='relative'>
                        <button onClick={toggleDropdown1}><FaArrowCircleDown className='mx-2 mt-2'></FaArrowCircleDown></button>
                        {isOpen1 && (
                            <div className="absolute">
                                <ul>
                                    <div className='bg-slate-200'> <Link >Hot Wheels</Link></div>
                                    <div className='bg-sky-200'><Link >Lego Police Car</Link></div>
                                    <div className='bg-amber-100'><Link >Matchbox Police Cruiser</Link></div>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div
                    onClick={() => handleTabClick("sports")}
                    className={`tab  tab2 sports ${activeTab == "sports" ? " bg-sky-600 text-black font-semibold" : ""
                        }`}
                >
                    Sports Car
                    <div className='relative'>
                        <button onClick={toggleDropdown2}><FaArrowCircleDown className='mx-2 mt-2'></FaArrowCircleDown></button>
                        {isOpen2 && (
                            <div className="absolute">
                                <ul>
                                    <div className='bg-slate-200'> <Link>Ferrari</Link></div>
                                    <div  className='bg-sky-200'> <Link>Porsche</Link></div>
                                    <div className='bg-amber-100'> <Link>Lamborghini </Link></div>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div
                    onClick={() => handleTabClick("regular")}
                    className={`tab  tab2 regular ${activeTab == "regular" ? " bg-sky-600 text-black font-semibold" : ""
                        }`}
                >
                    Regular Car
                    <div className='relative'>
                        <button onClick={toggleDropdown3}><FaArrowCircleDown className='mx-2 mt-2'></FaArrowCircleDown></button>
                        {isOpen3 && (
                            <div className="absolute">
                                <ul>
                                    <div className='bg-slate-200'> <Link>Tonka</Link></div>
                                    <div className='bg-sky-200'> <Link>Bruder</Link></div>
                                    <div className='bg-amber-100'> <Link>Hess</Link></div>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Category;