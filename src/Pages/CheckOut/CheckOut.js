import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, _id } = service;

    const handleOrderPlace = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const message = form.message.value;
        const email = user?.email || 'unregister';

        const order = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        };

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('order placed')
                }
                console.log(data)
            })
    }


    return (
        <div className='py-10 container mx-auto'>
            <form onSubmit={handleOrderPlace}>
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