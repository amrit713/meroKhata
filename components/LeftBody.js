import React from "react";
import Customer from "./Customer";

function LeftBody() {
  return (
    <div className="mx-4 w-[80%]">
      <div className="flex my-4 justify-end ">
      <button className=" btn "> Add Customer</button>
      </div>
      <div className=" border shadow-lg pt-4 ">
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        <Customer />
      </div>
    </div>
  );
}

export default LeftBody;
