import {React} from "react";
import Link from "next/link";
import { Select, Option } from "@material-tailwind/react";
import DatePickerComponent from "./DatePickerComponent";
import Timepicker from "./Timepicker";

export default function HeroBar() {
  return (
    <div className=" text-center pb-20">
      <div className=" bg-[url('../Images/HeroImg.png')] bg-no-repeat bg-center bg-cover object-contain relative w-full h-96 ">
        <div className="  absolute bottom-0 right-0 left-0 w-full h-full bg-black/40 pt-14 md:pt-20 space-y-10 md:space-y-16  justify-center text-white">
          <div className=" text-center space-y-4">
            <p className=" text-base font-bold">Véhicule de transport avec chauffeur</p>
            <h1 className=" text-3xl font-bold">
              Service de taxi et location <br />{" "}
              <span className=" text-orange">véhicule</span>
            </h1>
          </div>
          <div className=" w-full flex justify-center items-center z-10 ">
            <div className=" w-9/12 h-36 md:py-3 shadow-lg shadow-black/50 justify-center rounded-lg bg-white/90 md:bg-white  md:w-10/12 md:flex text-black md:rounded-full md:h-20  ">
              
              <div className=" w-52 border-r-2 border-black/20 flex items-center px-3 ">
                <input
                  className="  placeholder:italic outline-none w-44 h-9 px-2 placeholder:text-slate-400 block bg-white/90   sm:text-sm"
                  placeholder="Lieu de départ..."
                  type="text"
                  name="search"
                />
              </div>
              <div className=" w-36 border-r-2 border-black/20 flex justify-center items-center">
                <DatePickerComponent/>
              </div>
              <div className=" w-36 border-r-2 border-black/20 flex justify-center items-center">
                <Timepicker/>
              </div>
              <div className=" w-36 border-r-2 border-black/20 px-2 flex items-center">
                <Select className=" text-orange justify-between space-x-24 outline-none px-3 flex items-center">
                  <Option>jours</Option>
                  <Option>1 jour</Option>
                  <Option>2 jours</Option>
                  <Option>3 jours</Option>
                  <Option>4 jours</Option>
                </Select>
              </div>

              <div className=" w-44 flex justify-center items-center">
                <Link href="RetailsCarPage">
                  <button className=" bg-orange text-sm px-6 py-2 text-white font-semibold rounded-full">
                    Reserver
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  h-28"></div>
    </div>
  );
}

{
  /* <div className="flex items-center justify-center space-x-4">
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
                <div>
                  <Link href="RetailsCarPage">
                    <button className=" bg-orange text-sm px-5 py-1 text-white font-semibold rounded-full">
                      Reserver
                    </button>
                  </Link>
                </div>
              </div> */
}
