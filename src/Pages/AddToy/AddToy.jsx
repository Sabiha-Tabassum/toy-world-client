import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {


        fetch("http://localhost:5000/addToy", {
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
        <div className='bg-slate-400'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='mb-5 pt-4 ml-5'>
                    <input
                        className="p-2 rounded-lg"
                        {...register("title")}
                        placeholder="title"
                        defaultValue="Police Car"
                    />
                </div>



                <div className='mb-5 pt-4 ml-5 '>
                    <select className="p-2 rounded-lg " {...register("sub-category")}>
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


                <div className='mb-5 pt-4 ml-5'>
                    <input
                        className="p-2 rounded-lg "
                        {...register("deadline")}
                        placeholder="deadline"
                        type="date"
                    />
                </div>

                <div className='mb-5 pt-4 ml-5'>
                    <input
                        className="p-2 rounded-lg"
                        {...register("image")}
                        placeholder="image link"
                        type="url"
                        defaultValue="https://i.ibb.co/Zx0Pqj5/download-2.jpg"
                    />
                </div>



                <div className='mb-5 pt-4 ml-5'>
                    <input
                        className="p-2 rounded-lg "
                        {...register("available-quantity")}
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

                <div>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg"
                            {...register("description")}
                            placeholder="description"
                        />
                    </div>
                </div>

                <input className="bg-sky-600 p-4 ml-5 mb-2 rounded-3xl cursor-pointer" value="Add Toy" type="submit" />
            </form>
        </div>
    );
};




export default AddToy;