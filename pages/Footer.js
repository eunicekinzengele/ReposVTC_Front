import React from "react";
import Image from "next/image";
import logovtc from "../Images/logovtc.png";

export default function Footer() {
  return (
    <div className=" bg-zinc-700 flex justify-center h-72 ">
      <div className="w-2/6  text-white pl-20 space-y-4  pt-10 ">
        <div className=" h-20 w-36 pl-7 ml-3 flex justify-center items-center overflow-hidden">
          <Image className=" " alt="logo" src={logovtc} />
        </div>
        <p className=" font-semibold text-sm">Qui sommes nous?</p>
        <p className=" font-light text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="w-2/6  p-5 pt-10 ">
        <h2 className=" text-sm px-16 text-white underline decoration-orange font-semibold">
          LIENS RAPIDES
        </h2>{" "}
        <br />
        <ul className=" px-16 text-xs text-white font-medium space-y-2 ">
          <li>A propos de nous</li>
          <li>Nos différents services</li>
          <li>Voitures</li>
          <li>Témoignages</li>
        </ul>
      </div>
      <div className="w-2/6 items-center p-5 pt-10">
        <h2 className=" text-sm px-16 text-white underline decoration-orange font-semibold">
          LIENS RAPIDES
        </h2>{" "}
        <br />
        <div className=" bg-zinc-700 w-72 rounded text-sm font-semibold text-white space-y-2 p-4">
          <p className="flex">
            Adresse <span className=" text-orange ">......... </span>{" "}
            <span className=" font-light">Gombe Av. Unaco N° 01</span>{" "}
          </p>
          <p className="flex">
            Email <span className=" text-orange ">......... </span>{" "}
            <span className=" font-light">kinvtc@gmail.com</span>
          </p>
          <p className="flex">
            Téléphone <span className=" text-orange ">......... </span>{" "}
            <span className=" font-light">0819999999</span>{" "}
          </p>
          <p className="flex">
            Disponibilité <span className=" text-orange ">......... </span>{" "}
            <span className=" font-light">7j/7, de 8H - 20h</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
