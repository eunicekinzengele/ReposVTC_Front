import React from "react";
import Image from "next/image";
import flotte1 from "../Images/flotte1.jpg";
import { AiFillCar } from "react-icons/ai";
import { FaTachometerAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { TbSettingsCog } from "react-icons/tb";

export default function FleetOfVehicles() {
  return (
    <div className=" bg-zinc-200 text-center w-full h-auto pt-10 pb-16">
      <h1 className=" font-semibold text-2xl pb-8">
        Découvrez la flotte de véhicule chez <br /> kinVTC
      </h1>
      <div className=" flex justify-center space-x-5">
        <div className=" bg-white w-56 h-72 rounded-t-xl rounded  border-2 border-b-1 border-l-zinc-300 border-r-zinc-300 border-b-zinc-300">
          <div className=" h-3/5 rounded-t-xl">
            <Image className=" rounded-t-xl" src={flotte1} />
          </div>
          <div className=" bg-white text-left px-3">
            <h3 className=" font-semibold text-base">Toyota</h3>
            <p className=" text-sm">
              {" "}
              175$/ <span className=" text-orange">Jour</span>
            </p>
            <div className=" flex pt-2 ">
              <div className="w-3/6 space-y-2">
                <div className=" flex space-x-1">
                  <AiFillCar className=" text-sm text-orange" />
                  <p className=" text-xs">Modèle:2017</p>
                </div>
                <div className=" flex space-x-1">
                  <FaTachometerAlt className=" text-sm text-orange" />
                  <p className=" text-xs">30Km</p>
                </div>
              </div>
              <div className="w-3/6 space-y-2">
                <div className=" flex space-x-1">
                  <BsFillPersonFill className=" text-sm text-orange" />
                  <p className=" text-xs">5 personnes</p>
                </div>
                <div className=" flex space-x-1">
                  <TbSettingsCog className=" text-sm text-orange" />
                  <p className=" text-xs">Manuel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white w-56 h-72 rounded-t-xl rounded  border-2 border-b-1 border-l-zinc-300 border-r-zinc-300 border-b-zinc-300">
          <div className=" h-3/5 rounded-t-xl">
            <Image className=" rounded-t-xl" src={flotte1} />
          </div>
          <div className=" bg-white text-left px-3">
            <h3 className=" font-semibold text-base">Toyota</h3>
            <p className=" text-sm">
              {" "}
              175$/ <span className=" text-orange">Jour</span>
            </p>
            <div className=" flex pt-2 ">
              <div className="w-3/6 space-y-2">
                <div className=" flex space-x-1">
                  <AiFillCar className=" text-sm text-orange" />
                  <p className=" text-xs">Modèle:2017</p>
                </div>
                <div className=" flex space-x-1">
                  <FaTachometerAlt className=" text-sm text-orange" />
                  <p className=" text-xs">30Km</p>
                </div>
              </div>
              <div className="w-3/6 space-y-2">
                <div className=" flex space-x-1">
                  <BsFillPersonFill className=" text-sm text-orange" />
                  <p className=" text-xs">5 personnes</p>
                </div>
                <div className=" flex space-x-1">
                  <TbSettingsCog className=" text-sm text-orange" />
                  <p className=" text-xs">Manuel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white w-56 h-72 rounded-t-xl rounded  border-2 border-b-1 border-l-zinc-300 border-r-zinc-300 border-b-zinc-300">
          <div className=" h-3/5 rounded-t-xl">
            <Image className=" rounded-t-xl" src={flotte1} />
          </div>
          <div className=" bg-white text-left px-3">
            <h3 className=" font-semibold text-base">Toyota</h3>
            <p className=" text-sm">
              {" "}
              175$/ <span className=" text-orange">Jour</span>
            </p>
            <div className=" flex pt-2 ">
              <div className="w-3/6 space-y-2">
                <div className=" flex space-x-1">
                  <AiFillCar className=" text-sm text-orange" />
                  <p className=" text-xs">Modèle:2017</p>
                </div>
                <div className=" flex space-x-1">
                  <FaTachometerAlt className=" text-sm text-orange" />
                  <p className=" text-xs">30Km</p>
                </div>
              </div>
              <div className="w-3/6 space-y-2">
                <div className=" flex space-x-1">
                  <BsFillPersonFill className=" text-sm text-orange" />
                  <p className=" text-xs">5 personnes</p>
                </div>
                <div className=" flex space-x-1">
                  <TbSettingsCog className=" text-sm text-orange" />
                  <p className=" text-xs">Manuel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
