import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch("https://toy-world-server-lilac.vercel.app/addToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
        console.log(data);
    };

    return (
        <div className='bg-slate-300 '>
            <form onSubmit={handleSubmit(onSubmit)} className='ml-80'>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg "
                            {...register("title")}
                            placeholder="title"
                            defaultValue="Police Car"
                        />
                    </div>

                    <div className='mb-5 pt-4 ml-5 '>
                        <select className="p-2 rounded-lg " {...register("subCategory")}>
                            <option value="Lego Police Car">Lego Police Car</option>
                            <option value="Hot Wheels">Hot Wheels</option>

                            <option value="Matchbox Police Cruiser">Matchbox Police Cruiser</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Tonka">Tonka</option>
                            <option value="Bruder">Bruder</option>
                            <option value="Hess">Hess</option>
                        </select>
                    </div>
                </div>




                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg "
                            {...register("deadline")}
                            placeholder="deadline"
                            type="date"
                        />
                    </div>

                    <div className='mb-5 pt-4 ml-16'>
                        <input
                            className="p-2 rounded-lg"
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                            defaultValue="https://i.ibb.co/Zx0Pqj5/download-2.jpg"
                        />
                    </div>
                </div>



                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg "
                            {...register("availableQuantity")}
                            placeholder="Quantity"
                            type="text"
                        />
                    </div>

                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="your email"
                            type="email"
                        />
                    </div>
                </div>


                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg"
                            {...register("price")}
                            placeholder="price"
                        />
                    </div>

                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg"
                            {...register("rating")}
                            placeholder="rating"
                        />
                    </div>

                </div>



                <div>
                    <div className='mb-5  ml-5'>
                        <input
                            className="p-10 rounded-lg"
                            {...register("description")}
                            placeholder="description"
                        />
                    </div>
                </div>

                <input className="bg-slate-600 p-4 ml-5 mb-2 rounded-xl text-white font-semibold cursor-pointer" value="Add Toy" type="submit" />


            </form>
        </div>
    );
};




export default AddToy;