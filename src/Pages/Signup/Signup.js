import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                toast.success('successfully Sign up!')
                console.log(res.user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='py-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
                        <h2 className='mt-6 text-center text-3xl font-bold'>Sign Up</h2>
                        <form onSubmit={handleSignup} className="p-5 pb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-success">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-center mt-3 mb-4'>
                            <small>Already have an account? <Link to='/login' className='underline text-green-500'>Login</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;