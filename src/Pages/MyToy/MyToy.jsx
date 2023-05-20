import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import MyToysData from '../MyToysData/MyToysData';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [MyToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/addToy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [])



    return (
        <div className='max-w-5xl mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>PostedBy</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         MyToys.map(MyToy => <MyToysData
                         key={MyToy._id}
                         MyToy={MyToy}>

                         </MyToysData>)
                       }
                       
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyToy;