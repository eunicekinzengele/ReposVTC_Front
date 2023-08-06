import React from "react";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactDetail() {
  return (
    <div className=" h-96 w-full grid grid-cols-2 mt-5">
      <div className="  p-5 pl-16 ">
        <h3 className=" text-lg font-medium mb-5">Entrez en contact</h3>
        <div className=" space-x-3 mb-3">
          <input
            class="shadow appearance-none border rounded w-48	 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Nom complet"
          />
          <input
            class="shadow appearance-none border rounded w-44 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className=" space-x-3 mb-3">
          <input
            class="shadow appearance-none border rounded w-44	 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Sujet"
          />
          <input
            class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Téléphone"
          />
        </div>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 mb-3 w-96 text-sm text-gray-900 focus:outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange focus:border-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
          placeholder="Le message ici..."
        ></textarea>
        <button class="rounded-full border-2 border-orange md:text-sm  text-black font-semibold md:p-1 md:px-3 ">
          Envoyer
        </button>
      </div>
      <div className="  p-5 pl-10 ">
        <h3 className=" text-lg font-medium mb-5">Coordonnées</h3>
        <p className=" text-black/70">Kinshasa / RDC <br/> C/ Gombe Av. Unaco N° 01</p>
        <h3 className=" font-semibold mt-2 text-sm">Email</h3>
        <button class=" bg-orange text-white md:text-sm font-semibold md:p-1 md:px-3 mt-1">
          kinvtc@gmail.com
        </button>
        <h3 className=" font-semibold mt-2 text-sm">Appelez nous au:</h3>
        <button class=" bg-orange text-white md:text-sm font-semibold md:p-1 md:px-3 mt-1">
          0818999999
        </button>
        <h3 className=" font-semibold mt-2 text-sm">Suivez nous</h3>
        <div className=" space-x-2 mt-1">
            <button className=""><AiFillFacebook className=" text-2xl text-blue-800/90"/></button>
            <button><AiOutlineTwitter className=" text-2xl  text-blue-800/90"/></button>
            <button><BsWhatsapp className=" text-2xl text-green-700"/></button>
        </div>
      </div>
    </div>
  );
}
