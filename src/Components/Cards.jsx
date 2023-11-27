import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'; 

const Cards = (props)=>{
    let review = props.review;
    return(
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img src={review.image} alt="" className='rounded-full aspect-sqaure w-[140px] h-[140px] z-[25] '/>
                <div className='bg-violet-500 w-[140px] h-[140px] z-[-10] rounded-full top-[-6px] absolute left-[10px]'/>
            </div>
            <div className='text-center mt-7'>
                <p className='font-bold text-4=2xl '>{review.name}</p>
            </div>
            <div className='text-center mt-5'>
                <p className='text-violet-500 uppercase text-sm'>{review.job}</p>
            </div>
            <div className='text-violet-500 mx-auto mt-5'>
               <FaQuoteLeft/>
            </div>
            <div className='text-center mt-4 text-stale-500'>
                <p >{review.text}</p>
            </div>
            <div className='text-violet-500 mx-auto mt-5'>
               <FaQuoteRight /> 
            </div>
            
        </div>

    )

}
export default Cards;