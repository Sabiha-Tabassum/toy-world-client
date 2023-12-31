import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/limousine.png';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);
    const navItems = <>
        <div className='mx-4'>
            <NavLink
                to="/"

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold" : ""
                }
            >
                Home
            </NavLink>
        </div>

        <div className='mx-4'>
            <NavLink
                to="/alltoys"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold" : ""
                }
            >
                All Toys
            </NavLink>
        </div>


        <div className='mx-4'>
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold" : ""
                }
            >
                Blog
            </NavLink>
        </div>



        {
            user && <NavLink
                to="/addtoy"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold mx-4" : "mx-4"
                }
            >
                Add Toy
            </NavLink>
        }

        {
            user?.email ? <NavLink
                to="/mytoy"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold" : ""
                }
            >
                My Toys
            </NavLink> : ''
        }



    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='max-w-5xl mx-auto h-28'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="">
                        <img className='w-20' src={logo} alt="" />
                    </Link>
                    <Link to='/'><h1 className='font-bold text-amber-400 ml-8'>KidS Toy Shop</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>

                <div className="navbar-end">
                    <div className='relative px-8'>
                        {
                            user && <div>
                                <div>
                                    <img className=' rounded-full h-10 cursor-pointer' src={user.photoURL} alt=""
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave} />

                                </div>
                            </div>
                        }

                        {
                            isHovered && <div className='absolute left-10 top-8 bg-slate-200'>
                                <span>{user.displayName}</span>
                            </div>
                        }
                    </div>
                    {
                        user?.email ? <Link to="/login" className="btn btn-outline btn-warning border-b-4 border-amber-400" onClick={handleLogOut}>LogOut</Link> :
                            <Link to="/login" className="btn btn-outline btn-warning border-b-4 border-amber-400">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavigationBar;