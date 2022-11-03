import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img alt='/' src={image} className="w-full rounded-lg" />
            </div>
            <div className='absolute top-[25%] left-[6%] z-10'>
                <h3 className='text-6xl text-white font-bold'>Affordable
                    <br /> Price For Car
                    <br /> Servicing
                </h3>
                <p className='text-white mt-12 mb-8'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                <div>
                    <button className='btn btn-success mr-4'>Discover More</button>
                    <button className='btn btn-outline btn-success'>Latest Project</button>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 bottom-7 right-16">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;