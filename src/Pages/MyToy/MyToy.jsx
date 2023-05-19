import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [MyToys, setMyToys] = useState([]);

     const url = `http://localhost:5000/addToy?email=${user?.email}`

     useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))

    },[])



    return (
        <div>
            
        </div>
    );
};

export default MyToy;