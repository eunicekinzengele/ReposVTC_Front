import React from "react";
import Image from 'next/image';
import { ImLocation2 } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { ImClock } from "react-icons/im";
import logovtc from "../Images/logovtc.png";


export default function Header() {
  return (
    <div className="">
      <div className=" bg-Ggray h-12 content-center justify-center items-center flex">
        <div className=" flex space-x-11 text-xs text-white items-center">
          <div className=" flex items-center space-x-1">
            <ImLocation2 className=" text-lg text-orange"/>
            <p>
              Kinshasa/RDC <br /> C/ Gombe Av. Unaco N° 01
            </p>
          </div>
          <div className="flex space-x-1">
            <ImMobile className=" text-lg text-orange" />
            <p>089000000</p>
          </div>
          <div className=" flex space-x-1">
            <ImClock className=" text-base text-orange" />
            <p>7h/20h</p>
          </div>
        </div>
      </div>
      <div className=" border-stone-950  border-2 flex">
        <div className=" bg-slate-600 w-1/5 flex items-center justify-center">
         A {/* <Image className=" mx-auto h-24 w-24 object-cover" alt="logo" src={logovtc}/> */}
        </div>
        <div className="w-3/5	">
          <ul className=" flex justify-center py-6 space-x-7 text-sm">
            <li>Location véhicule</li>
            <li>Transfert aéroport</li>
            <li>Véhicules</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" w-1/5 flex items-center">
        <button class="rounded-full bg-orange text-sm p-1 px-2">Connexion|Inscription</button>
        </div>
      </div>
    </div>
  );
}
