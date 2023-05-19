import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/car-logo.png';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);
    const navItems = <>
        <Link to='/'>Home</Link>
        <Link to='/alltoys' className='mx-4'>All Toys</Link>
        <Link to='/mytoy' className='mx-4'>My Toys</Link>
        <Link>Blog</Link>
        <Link to='/addtoy' className='mx-4'>Add a Toy</Link>

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
        <div className='max-w-5xl mx-auto'>
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
                    <Link to="/" className="w-40">
                        <img src={logo} alt="" />
                    </Link>
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
                        user ? <Link to="/login" className="btn btn-outline btn-info" onClick={handleLogOut}>LogOut</Link> :
                            <Link to="/login" className="btn btn-outline btn-info">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavigationBar;