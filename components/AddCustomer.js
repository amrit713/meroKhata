import React from 'react'

function AddCustomer() {
  return (
    <div className= ' mx-auto w-[80%] py-10 bg-gray-100 mt-[80px] rounded-md shadow-md space-y-4 px-4'>
        <div className=" px-4 text-center">
        <p>Add Customer</p>
        </div>
        <div className='border mx-2'/>

        <div className="flex space-x-3  ">
            <div className=" flex flex-col space-y-2 w-[50%]">
                <label> Customer Name</label>
                <input type="text" placeholder='Name' className='border-2 p-2  rounded-lg' />
            </div>

            <div className=" flex flex-col space-y-2 w-[50%]">
                <label> Email</label>
                <input type="email" placeholder='Email' className='border-2 p-2  rounded-lg' />
            </div>
        </div>
        <button className='btn w-full'>Save</button>
    </div>
  )
}

export default AddCustomer