import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import MyToysData from '../MyToysData/MyToysData';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `https://toy-world-server-lilac.vercel.app/addToy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [])


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`https://toy-world-server-lilac.vercel.app/addToy/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted successfully');
                    const remaining = myToys.filter(toy => toy._id !== id);
                    setMyToys(remaining);
                }
            })
        }
    }

   



    return (
        <div className='max-w-5xl mx-auto'>
            <div className="overflow-x-auto w-full">
                <div>{myToys.length}</div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>PostedBy</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>deadline</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         myToys.map(MyToy => <MyToysData
                         key={MyToy._id}
                         MyToy={MyToy}
                         handleDelete={handleDelete}
                         >

                         </MyToysData>)
                       }
                       
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyToy;