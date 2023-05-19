import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='bg-slate-200'>
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
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
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
                <input className="bg-sky-600 p-4 ml-5 mb-2 rounded-3xl cursor-pointer" value="Add Toy" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;