import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='pb-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className='w-1/2 relative'>
                        <img src={img1} alt="" className='w-4/5 rounded-lg shadow-lg' />
                        <img src={img2} alt="" className='w-3/5 rounded-lg absolute right-0 top-1/2 p-2 bg-white shadow-lg' />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-xl font-bold text-green-400">About Us</h1>
                        <h3 className='text-5xl font-bold mt-3 mb-4'>We are qualified <br />
                            & of experience <br />
                            in this field</h3>
                        <p className="py-6 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="mb-6 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn btn-success">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;