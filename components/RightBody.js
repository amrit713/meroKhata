import React from 'react'
import {FaWallet} from "react-icons/fa";

function RightBody() {
  return (
    <div className='hidden sm:flex flex-col  w-[20%] h-[400px] shadow-md border mt-4 justify-between  '>
        <div className="mx-auto space-y-2 mt-4">
          <div className="h-[80px] w-[80px] bg-gray-100 rounded-full flex justify-center items-center ">
          <FaWallet size={28} className="text-yellow-500"/>
          </div>
        <p className='text-sm text-gray-700'>Net Balance</p>
        <p className='text-lg font-semibold'>Rs. 12,000</p>
        <p className='text-sm'>You'll Give </p>
        </div>

        <div className="flex justify-between px-4 mt-6 py-4 bg-gray-100">
          <div className="">
            <p className='text-sm'>you'll Give</p>
            <p className='text-lg font-semibold text-green-600'>Rs 20800</p>
          </div>
          <div className='border border-gray-300'/>
          <div className="">
          <p className='text-sm' >you'll Get</p>
            <p className='text-lg font-semibold text-red-600'>Rs 20800</p>
          </div>
        </div>
      
    </div>
  )
}

export default RightBody