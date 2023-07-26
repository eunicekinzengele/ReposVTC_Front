import React from 'react'
import { ImUsers } from "react-icons/im";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export default function DescriptionOfServicesLocation() {
  return (
    <div className=" flex justify-center py-5 pb-24 space-x-7">
    <div className=" bg-white w-56 h-56 rounded-xl text-left p-5 space-y-3  shadow-2xl shadow-black/50">
      <div>
        <ImUsers className=" text-orange text-5xl" />
      </div>
      <h2 className=" font-semibold text-sm">Une équipe d’experts</h2>
      <p className=" text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
    </div>
    <div className=" bg-white w-56 h-56 rounded-xl text-left p-5 space-y-3  shadow-2xl shadow-black/50">
      <div>
        <GiReceiveMoney className=" text-orange text-5xl" />
      </div>
      <h2 className=" font-semibold text-sm">Prix abordable</h2>
      <p className=" text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
    </div>
    <div className=" bg-white w-56 h-56 rounded-xl text-left p-5 space-y-3  shadow-2xl shadow-black/50">
      <div>
        <AiFillCar className=" text-orange text-5xl" />
      </div>
      <h2 className=" font-semibold text-sm">Service de qualité</h2>
      <p className=" text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
    </div>
  </div>
  )
}
