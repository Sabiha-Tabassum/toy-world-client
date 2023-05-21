import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import AllToysData from '../AllToysData/AllToysData';

const AllToys = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    // const url = 'https://toy-world-server-lilac.vercel.app/addToy'

    useEffect(() => {
        fetch('https://toy-world-server-lilac.vercel.app/addToy')
            .then(res => res.json())
            .then(data => setAllToys(data))

    }, [])

    return (
        <div>
            <div>
                <h1 className='text-center font-semibold m-2'>All Toys Data</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    allToys.map(allToy => <AllToysData
                        key={allToy._id}
                        allToy={allToy}>

                    </AllToysData>)
                }
            </div>
        </div>

    );
};

export default AllToys;