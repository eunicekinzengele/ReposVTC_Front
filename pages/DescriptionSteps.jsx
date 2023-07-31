import React from "react";

export default function DescriptionSteps() {
  return (
    <div className=" w-full h-72 space-y-3 px-10 py-">
      <div className=" flex items-center px-14 space-x-3">
        <div className=" bg-yellow-500 w-14 h-14 rounded-full flex justify-center items-center text-white font-semibold ">01</div>
        <div> 
            <h3 className=" text-sm font-semibold">Reserve votre voiture en ligne</h3>
            <p className=" text-sm font-normal">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
      <div className=" flex items-center px-14 space-x-3">
        <div className=" bg-blue-700 w-14 h-14 rounded-full flex justify-center items-center text-white font-semibold  ">02</div>
        <div> 
            <h3 className=" text-sm font-semibold">Confirmez votre reservation par mail</h3>
            <p className=" text-sm font-normal">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
      <div className="  flex items-center px-14 space-x-3">
        <div className=" bg-red-600 w-14 h-14 rounded-full flex justify-center items-center text-white font-semibold  ">03</div>
        <div> 
            <h3 className=" text-sm font-semibold">Rencontrez votre chauffeur</h3>
            <p className=" text-sm font-normal">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
      <div className=" flex items-center px-14 space-x-4">
        <div className=" bg-green-700 w-14 h-14 rounded-full flex justify-center items-center text-white font-semibold  ">04</div>
        <div> 
            <h3 className=" text-sm font-semibold">Arrivez à votre destination</h3>
            <p className=" text-sm font-normal">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
    </div>
  );
}
