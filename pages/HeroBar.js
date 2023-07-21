import React from "react";
import { ImUsers } from "react-icons/im";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export default function HeroBar() {
  return (
    <div className=" text-center pb-20">
      <div className=" bg-[url('../Images/HeroImg.png')] bg-no-repeat bg-center bg-cover object-contain relative w-full h-96 ">
        <div className="  absolute bottom-0 right-0 left-0 w-full h-full bg-black/40 pt-24  flex justify-center text-white">
          <div className=" text-center space-y-4">
            <p className=" text-base">Véhicule de tranport avec chauffeur</p>
            <h1 className=" text-3xl">
              Service de taxi et location <br />{" "}
              <span className=" text-orange">véhicule</span>
            </h1>
          </div>
        </div>
        <div className=" w-full flex justify-center pt-80 absolute  z-10">
          <div className=" shadow-lg shadow-black/50 bg-white w-4/5 h-48 flex flex-wrap  justify-center	">
            <button  className=" w-64 bg-amber-400">lorem ipipppppkkkkkkkkkkkkk</button>
            <button  className=" w-64  bg-amber-600">A</button>
            <button  className=" w-64  bg-amber-500">A</button>
            <button  className=" w-64  bg-amber-700">A</button>
            <button  className=" w-64  bg-amber-800">A</button>
            <button  className=" w-64 bg-amber-900">A</button>
            <div>
                <button className=" bg-orange text-sm px-5 py-1 text-white font-semibold rounded-full">Reserver</button>
            </div>
          </div>
        </div>
      </div>
      <div className="  h-52">
      </div>
      <div className=" flex justify-center py-5 pb- space-x-7">
        <div className=" bg-white w-56 h-56 rounded-xl text-left p-5 space-y-3  shadow-2xl shadow-black/50">
            <div><ImUsers className=" text-orange text-5xl"/></div>
            <h2 className=" font-semibold text-sm">Une équipe d’experts</h2>
            <p className=" text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className=" bg-white w-56 h-56 rounded-xl text-left p-5 space-y-3  shadow-2xl shadow-black/50">
            <div><GiReceiveMoney className=" text-orange text-5xl"/></div>
            <h2 className=" font-semibold text-sm">Prix abordable</h2>
            <p className=" text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className=" bg-white w-56 h-56 rounded-xl text-left p-5 space-y-3  shadow-2xl shadow-black/50">
            <div><AiFillCar className=" text-orange text-5xl"/></div>
            <h2 className=" font-semibold text-sm">Service de qualité</h2>
            <p className=" text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
       
      </div>

    </div>
  );
}
