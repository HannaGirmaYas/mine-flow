import React from 'react'
import logo from "../assets/mine-logo.gif"
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
const Header = () => {
  return (
    <div className='mb-6'>
        <img className='w-16 my-8' src={logo} alt="Mine Logo" />
        <div className="flex mb-8">
            <div className='w-6/12 md:w-4/12 border-b-8 pr-8  pb-2  border-mine-primary' >
                <h1 className='text-white text-5xl   md:text-7xl uppercase font-semibold'>Affiliate <br /> Marketing</h1>
            </div>
            <div className='hidden md:flex gap-y-4  items-end flex-col justify-center w-6/12 md:w-8/12'>
                    <div className='w-full flex justify-end'>
                        <div className='w-5/12 md:w-7/12 bg-mine-primary h-4'></div>
                        <div className='w-4 bg-mine-primary rounded-full ml-3 md:ml-6 h-4'></div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-5/12 md:w-7/12 bg-mine-secondary h-4'></div>
                        <div className='w-4 bg-mine-secondary rounded-full ml-3 md:ml-6 h-4'></div>
                    </div>
            </div>
        </div>
        <p className='text-white text-justify font-p_font'>Learn about affiliate marketing and how it helps businesses succeed online. Our flow chart breaks down the process step-by-step. Find tips, tricks, and industry insights for businesses and affiliates. Join us and take your business to the next level!</p>

        <p className='text-white block md:hidden mt-4'>Scroll Chart <SwipeLeftIcon /></p>
    </div>
  )
}

export default Header