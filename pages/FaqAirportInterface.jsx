import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function example() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question:` Que se passera t-il si mon vol est retardé ? Le chauffeur viendra
      quand même me chercher ?` ,
      answer:
      `Si vous indiquez votre numéro de vol lors de la réservation, votre chauffeur sera capable devérifier votre véritable heure d'arrivée. Ainsi, si votre vol est retardé, votre horaire de prise en charge sera ajusté et votre chauffeur sera là pour venir vous chercher à votre arrivée.` ,
    },
    {
      question: "Que faire si je suis retenu à l'aérport?",
      answer:
        `Vous n’avez pas besoin de vous inquiéter si vous mettez plus de
        temps que prévu pour Rejoindre votre chauffeur. Chaque transfert
        depuis l’aéroport est accompagné d’un temps D’attente gratuit
        pouvant aller jusqu’à 60 minutes selon la classe de véhicule
        choisi. Lors deréservation. `,
    },
    {
      question: "Où retrouver mon chauffeur?",
      answer:
        `Vous n’avez pas besoin de vous inquiéter si vous mettez plus de
        temps que prévu pour Rejoindre votre chauffeur. Chaque transfert
        depuis l’aéroport est accompagné d’un temps D’attente gratuit
        pouvant aller jusqu’à 60 minutes selon la classe de véhicule
        choisi. Lors deréservation.`,
    },
    {
      question: "Comment puis-je payer?",
      answer:
      `Vous n’avez pas besoin de vous inquiéter si vous mettez plus de
      temps que prévu pour Rejoindre votre chauffeur. Chaque transfert
      depuis l’aéroport est accompagné d’un temps D’attente gratuit
      pouvant aller jusqu’à 60 minutes selon la classe de véhicule
      choisi. Lors deréservation.`,
    },
    {
      question: `Puis-je reserver une voiture vers l'aéroport pour quelqu'un
      d'aute?`,
      answer:
      `Vous n’avez pas besoin de vous inquiéter si vous mettez plus de
      temps que prévu pour Rejoindre votre chauffeur. Chaque transfert
      depuis l’aéroport est accompagné d’un temps D’attente gratuit
      pouvant aller jusqu’à 60 minutes selon la classe de véhicule
      choisi. Lors deréservation.`,
    },
  ];

  return (
    <div className=" py-10 ">
      <div className=" flex justify-center ">
        <h1 className=" w-9/12 text-2xl font-semibold">
          Questions fréquentes
        </h1>
      </div>
      <div className=" h-auto py-8 w-full flex justify-center items-center">
        <div className=" border-2 w-9/12 rounded-lg	">
          {data.map((item, i) => (
            <div className=" border-b   w-full py-3">
              <div
                className=" text-sm flex justify-between items-center font-medium px-3 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <h2>{item.question}</h2>
                <span>
                  {selected === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div className= {`${i === selected ? "block" : "hidden"} text-black/75 text-sm px-5 py-2`} >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
