import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, _id } = service;
    console.log(service)
    return (
        <div className='py-10 container mx-auto'>
            <form>
                <h2 className='text-3xl font-medium'>{title}</h2>
                <h3 className='text-lg font-medium mb-7'>Price: ${price}</h3>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <input
                        type="text"
                        name='firstName'
                        placeholder="First Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        name='lastName'
                        placeholder="Last Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="phone"
                        name='phone'
                        placeholder="Your Phone"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        defaultValue={user?.email}
                        readOnly
                    />
                </div>
                <textarea
                    className="textarea textarea-bordered h-24 w-full my-4"
                    name='message'
                    placeholder="Your Message"></textarea>
                <input
                    type="submit"
                    value="Place Your Order"
                    className='btn btn-success text-white'
                />
            </form>
        </div>
    );
};

export default CheckOut;