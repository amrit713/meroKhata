import React from "react";
import Image from "next/image";
import { AiOutlineDown,AiOutlineSetting } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import {FiAlertCircle } from "react-icons/fi";

function Sidebar() {
  return (
    <div className=" fixed top-0 left-0  w-[30%] h-[100vh]  border-2 ">
      <h1 className="mb-20">MeroKhata</h1>
      <div className="flex items-center justify-between  border mx-2 p-1 mb-8 rounded-md text-gray-700 cursor-pointer">
        <div className="flex items-center space-x-2">
          <div className=" relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-primary">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
          </div>
          <p className="font-bold ">Sandip</p>
        </div>
        <AiOutlineDown size={20} />
      </div>

      <div className="mx-2 ">
        <ul className="space-y-4">
          <li>
            <button className="btn_nav">
              <BiHome size={24} /> <p> Home</p>{" "}
            </button>
          </li>
          <li>
            <button className="btn_nav">
              <AiOutlineSetting size={24} /> <p> Account</p>{" "}
            </button>
          </li>
          <li>
            <button className="btn_nav">
            <FiAlertCircle size={24} /> <p> Settings</p>{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
