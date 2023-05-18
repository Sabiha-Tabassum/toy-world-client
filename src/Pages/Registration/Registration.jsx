import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Registration = () => {
    const { createUser, updateProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                setSuccess('User created successfully');
                event.target.reset();
            })

            .catch(error => {
                console.error(error.message);
                setError(error.message);
                setSuccess('');
            })

            updateProfile(); 

    }

    return (
        <div className='max-w-6xl mx-auto mb-2'>
            <div className="hero min-h-screen  bg-sky-100 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Please Registration!!!</h1>
                            <form onSubmit={handleRegisterForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-info" type="submit" value="Registration" />
                                </div>
                            </form>
                            <div>
                                <p className='text-red-500'>{error}</p>
                            </div>
                            <div>
                                <p className='text-sky-500'>{success}</p>
                            </div>
                            <br />
                            <div>
                                <p>If you have an Account go to <Link className='text-sky-600 font-semibold' to="/login">Login</Link></p>
                            </div>
                            <br />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;