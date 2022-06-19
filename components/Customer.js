import React from "react";
import Image from "next/image";
function Customer() {
  return (
    <div className="border-b-2 px-4 py-2 flex justify-between hover:shadow-md mb-4">
      <div className=" cursor-pointer flex items-center space-x-2">
        <div className=" relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-primary">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            layout="fill"
            objectFit="cover"
            alt="img"
          />
        </div>
        <div className="">
          <p className="text-gray-600 font-semibold"> Sandip </p>
          <p className="text-sm text-gray-400">2 days ago</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="">
            <p className="font-semibold text-red-600 text-lg">RS 500</p>
            <p className="text-gray-500 text-sm">You'll Give</p>
        </div>
       
        <button className="btn_customer "> You Gave Rs</button>
        <button className="btn_customer text-green-500 border-green-500 hover:bg-green-50"> You Got Rs</button>
    
        
      </div>
    </div>
  );
}

export default Customer;
