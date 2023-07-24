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
        <div className=" w-full flex justify-center items-center  pt-80 absolute  z-10">
          <div className=" shadow-lg shadow-black/50 bg-white w-4/5 h-48 space-y-7 space-x-4 items-center pt-7 ">
            <div className="flex items-center justify-center space-x-4">
              <input
                className="  placeholder:italic placeholder:text-slate-400 block bg-white border border-gray-300 w-44 h-12 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-orange focus:ring-orange focus:ring-1 sm:text-sm"
                placeholder="Lieu de départ..."
                type="text"
                name="search"
              />

              <input
                className=" border-2 bg-gray-200 border-gray-300 h-12 w-44 decoration-none focus:border-orange focus:ring-orange focus:ring-1 px-3 "
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
              />

              <input
                className=" border-2 bg-gray-200 border-gray-300 h-12 w-44 decoration-none focus:border-orange focus:ring-orange focus:ring-1 px-3"
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />

              <select
                id="currency"
                name="currency"
                className=" border-2 text-gray-500 bg-gray-200 border-gray-300 h-12 w-44 decoration-none focus:border-orange focus:ring-orange  focus:ring-1 px-3"
              >
                <option>Nombre de jours</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div>
              <button className=" bg-orange text-sm px-5 py-1 text-white font-semibold rounded-full">
                Reserver
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  h-52"></div>
      <div className=" flex justify-center py-5 pb- space-x-7">
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
    </div>
  );
}
