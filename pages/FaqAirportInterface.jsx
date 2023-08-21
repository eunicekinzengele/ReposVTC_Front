import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";

export default function FaqAirportInterface() {
  return (
    <div className="  w-full flex justify-center p-5">
      <div className="  w-8/12 grid grid-cols-2 justify-between p-2">
        <div className=" space-y-5">
          <Link href="AnswerFaqAirport1  ">
            <div className=" w-80  border-2 border-orange cursor-pointer hover:bg-orange hover:text-white h-20 p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <BsPlus className=" text-lg font-semibold text-orange " />
              </span>
              <p className=" text-sm">
                Que se passera t-il si mon vol est retardé? Le chauffeur viendra
                quand même me chercher?{" "}
              </p>{" "}
            </div>
          </Link>
          <Link href="AnswerFaqAirport2">
            <div className=" w-80  border-2 border-orange h-20 cursor-pointer  hover:bg-orange hover:text-white p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <BsPlus className=" text-lg font-semibold text-orange" />{" "}
              </span>
              <p className=" text-sm">
                Que faire si je suis retenu à l'aérport?
              </p>{" "}
            </div>
          </Link>
          <Link href="AnswerFaqAirport3">
            <div className=" w-80  border-2 border-orange cursor-pointer  hover:bg-orange hover:text-white h-20 p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <BsPlus className=" text-lg font-semibold text-orange" />{" "}
              </span>
              <p className=" text-sm">Où retrouver mon chauffeur? </p>{" "}
            </div>
          </Link>
        </div>
        <div className=" space-y-5">
          <Link href="AnswerFaqAirport4">
            <div className=" w-80 border-2 border-orange cursor-pointer  hover:bg-orange hover:text-white h-20 p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <BsPlus className=" text-lg font-semibold text-orange" />{" "}
              </span>
              <p className=" text-sm">Comment puis-je payer? </p>{" "}
            </div>
          </Link>
          <Link href="AnswerFaqAirport5">
            <div className=" w-80  border-2 border-orange cursor-pointer  hover:bg-orange hover:text-white h-20 p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <BsPlus className=" text-lg font-semibold text-orange" />{" "}
              </span>
              <p className=" text-sm">
                Puis-je reserver une voiture vers l'aéroport pour quelqu'un
                d'aute?{" "}
              </p>{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
