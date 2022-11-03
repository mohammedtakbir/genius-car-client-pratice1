import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Header = () => {
    const headerIem = <>
        <li className='mx-2 font-medium text-lg'>
            <Link to='/home' className='active:bg-slate-400'>Home</Link>
        </li>
        <li className='mx-2 font-medium text-lg'>
            <Link to='/orders' className='active:bg-slate-400'>Orders</Link>
        </li>
        <li className='mx-2 font-medium text-lg'>
            <Link className='active:bg-slate-400'>About</Link>
        </li>
        <li className='mx-2 font-medium text-lg'>
            <Link className='active:bg-slate-400'>Services</Link>
        </li>
        <li className='mx-2 font-medium text-lg'>
            <Link className='active:bg-slate-400'>Blog</Link>
        </li>
        <li className='mx-2 font-medium text-lg'>
            <Link className='active:bg-slate-400'>Contact</Link>
        </li>
        <li className='mx-2 font-medium text-lg'>
            <Link to='/login' className='active:bg-slate-400'>Login</Link>
        </li>
        <li className='mx-2 font-medium text-lg'>
            <Link to='/signup' className='active:bg-slate-400'>Sign Up</Link>
        </li>
    </>
    return (
        <div className='py-5'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {headerIem}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {headerIem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn btn-outline btn-success'>Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;