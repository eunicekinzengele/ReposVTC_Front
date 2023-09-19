import React from "react";
import { FaArrowRightLong, FaArrowLeftLong, FaFan, FaMusic} from "react-icons/fa6";
import { BiSolidCalendar } from "react-icons/bi";
import car1 from "../Images/car1.png";
import Image from "next/image";
import { AiFillCar } from "react-icons/ai";
import { TbSettingsCog } from "react-icons/tb";
import { FaTachometerAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IconName } from "react-icons/fa";
import Link from "next/link";

export default function CarsRetails() {
  return (
    <div className="  w-full pb-10">
      <div className="p-5 flex justify-center ">
        <div className=" h-12 border-2 border-black/50 flex  justify-center w-4/5  ">
          <div className=" w-5/12 flex justify-center items-center space-x-4 text-sm font-medium	">
            {" "}
            <p>Rond point victoire</p>
            <div className=" text-orange font-semibold">
              <FaArrowRightLong />
              <FaArrowLeftLong />
            </div>
            <p>Pullman hotel</p>
          </div>
          <div className=" border-l-2 border-r-2 border-black/50 w-2/6  flex items-center justify-center space-x-1	">
            {" "}
            <BiSolidCalendar className=" text-orange" />
            <input
              className="  placeholder:italic placeholder:text-slate-400 block bg-white   w-32 h-7 py-2 pl-3 pr-3 focus:outline-none sm:text-sm"
              placeholder="11.juillet.2023"
              type="text"
              name="userName"
            />
            |
            <input
              className="  placeholder:italic placeholder:text-slate-400 block bg-white   w-24 h-7 py-2 pl-3 pr-3 focus:outline-none sm:text-sm"
              placeholder="10h30'"
              type="text"
              name="userName"
            />
          </div>
          <div className=" w-3/12  flex justify-center items-center">
            {" "}
            <p className=" text-sm font-medium "> 3 jours</p>
          </div>
        </div>
      </div>

      <div className=" text-center pt-2 pb-4">
       <p>Choisissez un véhicule pour: Pullman hotel</p>
      </div>

    {/* Détails */}

      <div className="p-5  flex justify-center">
        <div className="  border-zinc-300 rounded-lg border-4 flex justify-center h-44 w-10/12	">
          <div className=" rounded-l-lg w-2/6 px-9 py-4 flex justify-center  ">
            <Image className=" w-28 h-20" src={car1} />
          </div>
          <div className="  w-5/12 p-4 space-y-2">
            <div className="">
              <h1 className=" text-sm font-semibold">Toyota corolla</h1>
              <h3 className=" text-base">
                150$ / <span className=" text-orange">Jour </span>
              </h3>
            </div>
            <div className="  h-20 grid grid-cols-2 ">
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <AiFillCar className=" text-orange" />
                  <p className=" text-xs">Marque: TX, TXL, VX</p>
                </div>
                <div className=" flex space-x-2">
                  <TbSettingsCog className=" text-orange" />
                  <p className=" text-xs">Automatique</p>
                </div>
                <div className=" flex space-x-2">
                  <FaTachometerAlt className=" text-orange" />
                  <p className=" text-xs">20 Km</p>
                </div>
              </div>
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <BsFillPersonFill className=" text-orange" />
                  <p className=" text-xs">5 personne</p>
                </div>
                <div className=" flex space-x-2">
                  <FaFan className=" text-orange" />
                  <p className=" text-xs">Climatisation</p>
                </div>
                <div className=" flex space-x-2">
                  <FaMusic className=" text-orange" />
                  <p className=" text-xs">Auto-radio</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-3/12 p-4 rounded-r-lg space-y-2">
            <div className=" h-11
            ">
              
            </div>
            <div className=" h-20 space-y-1">
              <p className=" text-sm">Prix pour 3 jours:</p>
              <p className=" text-base font-medium">450 $</p>
              <div>
                <Link href="PaymentPage">
              <button className=" bg-orange text-sm px-5 py-1 text-white font-semibold rounded-full">
                Reserver
              </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5  flex justify-center">
        <div className="  border-zinc-300 rounded-lg border-4 flex justify-center h-44 w-10/12	">
          <div className=" rounded-l-lg w-2/6 px-9 py-4 flex justify-center  ">
            <Image className=" w-28 h-20" src={car1} />
          </div>
          <div className="  w-5/12 p-4 space-y-2">
            <div className="">
              <h1 className=" text-sm font-semibold">Toyota corolla</h1>
              <h3 className=" text-base">
                150$ / <span className=" text-orange">Jour </span>
              </h3>
            </div>
            <div className="  h-20 grid grid-cols-2 ">
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <AiFillCar className=" text-orange" />
                  <p className=" text-xs">Marque: TX, TXL, VX</p>
                </div>
                <div className=" flex space-x-2">
                  <TbSettingsCog className=" text-orange" />
                  <p className=" text-xs">Bagage</p>
                </div>
                <div className=" flex space-x-2">
                  <FaTachometerAlt className=" text-orange" />
                  <p className=" text-xs">20 Km</p>
                </div>
              </div>
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <BsFillPersonFill className=" text-orange" />
                  <p className=" text-xs">5 personne</p>
                </div>
                <div className=" flex space-x-2">
                  <FaFan className=" text-orange" />
                  <p className=" text-xs">Climatisation</p>
                </div>
                <div className=" flex space-x-2">
                  <FaMusic className=" text-orange" />
                  <p className=" text-xs">Auto-radio</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-3/12 p-4 rounded-r-lg space-y-2">
            <div className=" h-11
            ">
              
            </div>
            <div className=" h-20 space-y-1">
              <p className=" text-sm">Prix pour 3 jours:</p>
              <p className=" text-base font-medium">450 $</p>
              <div>
              <button className=" bg-orange text-sm px-5 py-1 text-white font-semibold rounded-full">
                Reserver
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  flex justify-center">
        <div className="  border-zinc-300 rounded-lg border-4 flex justify-center h-44 w-10/12	">
          <div className=" rounded-l-lg w-2/6 px-9 py-4 flex justify-center  ">
            <Image className=" w-28 h-20" src={car1} />
          </div>
          <div className="  w-5/12 p-4 space-y-2">
            <div className="">
              <h1 className=" text-sm font-semibold">Toyota corolla</h1>
              <h3 className=" text-base">
                150$ / <span className=" text-orange">Jour </span>
              </h3>
            </div>
            <div className="  h-20 grid grid-cols-2 ">
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <AiFillCar className=" text-orange" />
                  <p className=" text-xs">Marque: TX, TXL, VX</p>
                </div>
                <div className=" flex space-x-2">
                  <TbSettingsCog className=" text-orange" />
                  <p className=" text-xs">Automatique</p>
                </div>
                <div className=" flex space-x-2">
                  <FaTachometerAlt className=" text-orange" />
                  <p className=" text-xs">20 Km</p>
                </div>
              </div>
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <BsFillPersonFill className=" text-orange" />
                  <p className=" text-xs">5 personne</p>
                </div>
                <div className=" flex space-x-2">
                  <FaFan className=" text-orange" />
                  <p className=" text-xs">Climatisation</p>
                </div>
                <div className=" flex space-x-2">
                  <FaMusic className=" text-orange" />
                  <p className=" text-xs">Auto-radio</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-3/12 p-4 rounded-r-lg space-y-2">
            <div className=" h-11
            ">
              
            </div>
            <div className=" h-20 space-y-1">
              <p className=" text-sm">Prix pour 3 jours:</p>
              <p className=" text-base font-medium">450 $</p>
              <div>
              <button className=" bg-orange text-sm px-5 py-1 text-white font-semibold rounded-full">
                Reserver
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  flex justify-center">
        <div className="  border-zinc-300 rounded-lg border-4 flex justify-center h-44 w-10/12	">
          <div className=" rounded-l-lg w-2/6 px-9 py-4 flex justify-center  ">
            <Image className=" w-28 h-20" src={car1} />
          </div>
          <div className="  w-5/12 p-4 space-y-2">
            <div className="">
              <h1 className=" text-sm font-semibold">Toyota corolla</h1>
              <h3 className=" text-base">
                150$ / <span className=" text-orange">Jour </span>
              </h3>
            </div>
            <div className="  h-20 grid grid-cols-2 ">
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <AiFillCar className=" text-orange" />
                  <p className=" text-xs">Marque: TX, TXL, VX</p>
                </div>
                <div className=" flex space-x-2">
                  <TbSettingsCog className=" text-orange" />
                  <p className=" text-xs">Automatique</p>
                </div>
                <div className=" flex space-x-2">
                  <FaTachometerAlt className=" text-orange" />
                  <p className=" text-xs">20 Km</p>
                </div>
              </div>
              <div className=" space-y-2">
                <div className=" flex space-x-2">
                  <BsFillPersonFill className=" text-orange" />
                  <p className=" text-xs">5 personne</p>
                </div>
                <div className=" flex space-x-2">
                  <FaFan className=" text-orange" />
                  <p className=" text-xs">Climatisation</p>
                </div>
                <div className=" flex space-x-2">
                  <FaMusic className=" text-orange" />
                  <p className=" text-xs">Auto-radio</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-3/12 p-4 rounded-r-lg space-y-2">
            <div className=" h-11
            ">
              
            </div>
            <div className=" h-20 space-y-1">
              <p className=" text-sm">Prix pour 3 jours:</p>
              <p className=" text-base font-medium">450 $</p>
              <div>
              <button className=" bg-orange text-sm px-5 py-1 text-white font-semibold rounded-full">
                Reserver
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
