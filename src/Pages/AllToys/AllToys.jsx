import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const AllToys = () => {
    const {user} = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    // const url = 'http://localhost:5000/addToy'

    useEffect(()=>{
        fetch('http://localhost:5000/addToy')
        .then(res => res.json())
        .then(data => console.log(data))

    },[])

    return (
        <div>
            
        </div>
    );
};

export default AllToys;