import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdated }) => {
    const { price, serviceName, serviceId, _id, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [serviceId])

    return (
        <>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost border border-gray-400'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-12 h-12">
                                {orderService?.img &&
                                    <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                            <div className="text-sm opacity-50">{price}</div>
                        </div>
                    </div>
                </td>
                <td>Purple</td>
                <th>
                    <button onClick={() => handleStatusUpdated(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
                </th>
            </tr>
        </>
    );
};

export default OrderRow;