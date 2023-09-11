import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FaqPaymentInterface() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question:` Quelles sont les options de paiement acceptées ?` ,
      answer:
      `KIN VTC accepte les cartes Visa, Mastercard et  les paiement mobil, M-Pesa, Orange Money et Airtel Money.  Il est aussi possible de payer en espèces pour le clients fidèle.` ,
    },
    {
      question: "Comment puis-je ajouter ou supprimer une méthode de paiement ?",
      answer:
        `Vous pouvez ajouter et supprimer des options de paiement dans votre profil. L'ajout d'une nouvelle méthode de paiement n'affectera pas les courses déjà effectuées. Elle ne pourra être utiliser que pour les nouvelles réservations. Si vous avez fait des réservations en utilisant une carte de crédit que vous avez supprimée, veuillez annuler et refaire la réservation en utilisant une nouvelle méthode de paiement. `,
    },
    {
      question: "Puis-je mettre à jour les informations de ma méthode de paiement par téléphone ou e-mail ?",
      answer:
        `Pour protéger vos informations et pour des raisons de sécurité, nous n'acceptons pas que de telles informations soient transmises par téléphone ou e-mail.`,
    },
    {
      question: "Quand est-ce que le paiement est prélevé pour ma course ?",
      answer:
      `Votre carte et votre compte mobil money sera débitée immédiatement quand vous confirmation la réservation.`,
    },
    {
      question: `Puis-je enregistrer deux adresses de facturation dans mon profil ?`,
      answer:
      `Il est impossible d'enregistrer plusieurs adresses dans un même compte. Si vous avez besoin d'enregistrer une deuxième adresse pour des raisons comptables, nous vous suggérons de créer un deuxième compte.`,
    },
  ];

  return (
    <div className=" py-10 ">
      <div className=" flex justify-center ">
        <h1 className=" w-9/12 text-2xl font-semibold">
         Paie Questions fréquentes
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
