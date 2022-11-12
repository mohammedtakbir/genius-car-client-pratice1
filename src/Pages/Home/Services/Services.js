import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAscending, setAscending] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();


    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAscending ? 'Ascending' : 'descending'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAscending, search]);

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }


    return (
        <div className='container mx-auto'>
            <div className='text-center mt-6'>
                <h1 className="text-xl font-bold text-green-400">Services</h1>
                <h3 className='text-5xl font-bold mb-5 mt-3'>Our Service Area</h3>
                <p className="text-gray-500 w-[35%] mx-auto mb-12">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button className='btn btn-success text-white mb-7' onClick={() => setAscending(!isAscending)}>{isAscending ? 'High to Low' : 'Low to High'}</button>
                <div>
                    <input className='input input-sm input-bordered max-w-x mr-3' ref={searchRef} type="text" name="" id="" />
                    <button onClick={handleSearch} className='btn btn-success text-white mb-7'>Search</button>
                </div>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;