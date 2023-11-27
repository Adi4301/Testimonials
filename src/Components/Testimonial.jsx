import React, { useState } from 'react'
import Cards from './Cards';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

const Testimonial = (props)=>{
    let reviews = props.reviews;

    const[index,setIndex] = useState(0);
    const leftShift = ()=>{
          if(index-1<0)
          {
            setIndex(reviews.length-1);
          }
          else{
            setIndex(index-1);
          }
    }

    const rightShift = ()=>{
        if(index+1>=reviews.length)
          {
            setIndex(0);
          }
          else{
            setIndex(index+1);
          }

    }

    const Handler = ()=>{
      let newIndex = Math.floor(Math.random() * reviews.length);
      setIndex(newIndex);

    }


    return(
        <div className='flex flex-col justify-center items-center w-[85vw] md:w-[700px] bg-white mt-10 p-10 transition-all duration-700 hover:shadow-md'>
            <Cards review = {reviews[index]}/>
            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftShift}>
                    <FiChevronLeft/>
                </button>
                <button>
                     <FiChevronRight className='cursor-pointer hover:text-violet-500' onClick={rightShift}/>
                </button>
            </div>
            <div>
                <button className='bg-violet-500 hover:bg-violet-400 transition-all duration-300 cursor-pointer rounded-md py-2 px-2 text-white mt-5' onClick={Handler}>Suprise me</button>
            </div>
        </div>
        


    
    )
}
export default Testimonial;