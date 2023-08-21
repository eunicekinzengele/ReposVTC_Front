import React from "react";
import Topbar from "../components/layout/Topbar";
import Header from "./Header";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Footer from "./Footer";

export default function AnswerFaqAirport2() {
  return (
    <div className=" w-full h-auto p-y">
      <Topbar />
      <Header />
      <div className=" bg-zinc-100 py-7 h-auto pb-14 flex justify-center">
        <div className=" w-2/3 text-center space-y-8 h-auto	">
          <div className=" flex justify-center space-x-2 items-center text-sm">
            <p className=" text-orange">
              <Link href="FaqAirportPage">Centre d'aide</Link>
            </p>

            <IoIosArrowForward />
            <p className=" text-orange">
              Que faire si je suis retenu à l'aérport?
            </p>
          </div>
          <h1 className=" text-3xl font-medium mt-10 ">
          Que se passe t-il si mon vol est retardé ?  <br/> mon chauffeur viendra t-il me chercher?
          </h1>
          <div className=" text-left px-20 text-sm">
            <p className="">
            Si vous indiquez votre numéro de vol lors de la réservation, votre chauffeur sera capable devérifier votre véritable heure d'arrivée. <br/> Ainsi, si votre vol est retardé, votre horaire de prise en charge sera ajusté et votre chauffeur sera là pour venir vous chercher à votre arrivée. <br /> <br />
              Avez-vous trouver une réponse à votre question? <br />
              Si non, veuillez nous{" "}
              <span className=" text-orange">
                {" "}
                <Link href="ContactPage">contacter</Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
