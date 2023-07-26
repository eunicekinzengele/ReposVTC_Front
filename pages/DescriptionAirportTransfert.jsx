import React from "react";
import { PiAirplaneTilt } from "react-icons/pi";
import { AiOutlinePercentage, AiOutlineCheck } from "react-icons/ai";

export default function DescriptionAirportTransfert() {
  return (
    <div className=" w-full bg-zinc-200 h-56 flex justify-center pl-10 pr-10 space-x-3">
      <div className=" w-2/6 flex items-center space-x-3 pl-3 pr-3">
        <div className=" bg-orange w-56 h-16 rounded-full flex justify-center items-center">
          <PiAirplaneTilt className=" w-14 h-9 text-white" />
        </div>
        <div className=" space-y-1">
          <h3 className=" font-medium text-base"> Suivi de vol</h3>
          <p className=" text-sm font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quas
            et, delectus, harum eveniet quos nisi deserunt reprehenderit
            accusantium{" "}
          </p>
        </div>
      </div>
      <div className=" w-2/6 flex items-center space-x-3 pl-3 pr-3">
        <div className=" bg-orange w-56 h-16 rounded-full flex justify-center items-center">
          <AiOutlinePercentage className=" w-10 h-8 text-white" />
        </div>
        <div className=" space-y-1">
          <h3 className=" font-medium text-base"> Suivi de vol</h3>
          <p className=" text-sm font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quas
            et, delectus, harum eveniet quos nisi deserunt reprehenderit
            accusantium{" "}
          </p>
        </div>
      </div>
      <div className=" w-2/6 flex items-center space-x-3 pl-3 pr-3">
        <div className=" bg-orange w-56 h-16 rounded-full flex justify-center items-center">
          <AiOutlineCheck className=" w-10 h-8 text-white" />
        </div>
        <div className=" space-y-1">
          <h3 className=" font-medium text-base"> Suivi de vol</h3>
          <p className=" text-sm font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quas
            et, delectus, harum eveniet quos nisi deserunt reprehenderit
            accusantium{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
