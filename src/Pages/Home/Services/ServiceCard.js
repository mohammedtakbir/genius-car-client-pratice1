import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;

    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl border p-4 min-h-full">
                <figure><img src={img} alt="Shoes" className='rounded-lg' /></figure>
                <div className="mt-4">
                    <h2 className="font-medium text-2xl mb-3">{title}</h2>
                    <p className='text-xl font-medium mb-3 text-green-400'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-success text-white">checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;