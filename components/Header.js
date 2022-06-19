import React from "react";
import {BsSearch} from "react-icons/bs";
import Image from "next/image";


function Header() {
  return (
    <div className="fixed top-0 right-0 w-[70%]">
    <div className="flex justify-between  items-center h-[90px] px-4  shadow-md  w-full ">
      <div className=" ">
        <div className="px-2 py-2 bg-gray-100  justify-between rounded-md flex text-gray-500 border-2 w-[400px] ">
          <input type="text" placeholder="Search" className="outline-none bg-gray-100" />
          <BsSearch size={24}  />

        </div>
      </div>
      <div className=" cursor-pointer flex items-center space-x-2">
        <div className=" relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-primary">
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" layout="fill" objectFit="cover" alt="img"/>
        </div>
        <p className="text-gray-600 font-semibold"> Sandip </p>
      </div>
    </div>
    </div>
  );
}

export default Header;
