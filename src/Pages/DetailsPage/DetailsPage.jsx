import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const allToysDetails = useLoaderData();
    console.log(allToysDetails);
    const { image, title, subCategory, availableQuantity, price, description } = allToysDetails;
    return (
        <div className='my-10'>
            <div className='flex justify-center items-center max-w-4xl mx-auto border-2 bg-sky-100'>
                <div className='ml-2'>
                    <img src={image} alt="" />
                </div>
                <div className='ml-20'>
                    <h1 className='font-bold my-2'>Name: {title}</h1>
                    <p className='font-semibold my-2'>Sub-Category: {subCategory}</p>
                    <div className='flex'>
                       
                        <p className='font-semibold my-2 '>Price: {price}</p>
                        <p className='font-semibold my-2 mx-14'>Quantity:   {availableQuantity}</p>
                    </div>
                    
                    <p> <span className='font-semibold'>Description:</span> {description}</p>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;