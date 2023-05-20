import React from 'react';


const MyToysData = ({ MyToy }) => {
    console.log(MyToy);

    const { title, postedBy, price, deadline, image, subCategory, availableQuantity } = MyToy

    return (

        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>

                <br />
                <span className="badge badge-ghost badge-sm">{postedBy}</span>
            </td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>{deadline}</td>
            <th>
               
                    <button className="btn btn-ghost btn-xs">Delete</button>
               
            </th>
        </tr>

    );
};

export default MyToysData;