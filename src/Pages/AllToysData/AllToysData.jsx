import React from 'react';
import { Link } from 'react-router-dom';

const AllToysData = ({ allToy }) => {
    console.log(allToy);

    const { _id, title, subCategory, availableQuantity, price, image, postedBy, description } = allToy
    return (
        <div>
           
            <div className="card card-compact w-72 mb-2 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{postedBy}</h2>

                    <p>Sub-category:{subCategory}</p>
                    <p>Quantity:{availableQuantity}</p>
                    <p>Price:{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysData;