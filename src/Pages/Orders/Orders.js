import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetch(`https://genius-car-server-pratice1.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token-practice1')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userSignOut()
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setOrders(data)
            })
    }, [user?.email, userSignOut]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this order?')
        if (proceed) {
            fetch(`https://genius-car-server-pratice1.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token-practice1')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                        // setRefresh(!refresh);
                        toast.success('deleted successfully')
                    }
                    console.log(data)
                })
        }
    };

    const handleStatusUpdated = (id) => {
        fetch(`https://genius-car-server-pratice1.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token-practice1')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';
                    const newUser = [approving, ...remaining];
                    setOrders(newUser);
                }
                console.log(data)
            })
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-medium my-2'>You have {orders.length} order!</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>FAVORITE COLOR</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdated={handleStatusUpdated}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;