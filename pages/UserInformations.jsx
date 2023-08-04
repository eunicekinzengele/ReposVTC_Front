import React from "react";

export default function UserInformations() {
  return (
    <div className=" px-24 mb-5 pb-5 ">
      <div className=" justify-between">
        <div className=" border-b-2  w-64 mb-8 mt-4 ">
          Information personnelles
        </div>
        <div class="flex  mb-3">
          <label
            class="block text-gray-700 text-sm font-bold w-48  "
            for="username"
          >
            Nom complet
          </label>
          <div className="  space-x-5">
            <input
              class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-52"
              id="username"
              type="text"
              placeholder="Prénom"
            />
            <input
              class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-56"
              id="username"
              type="text"
              placeholder="Nom"
            />
          </div>
        </div>

        <div class=" flex   mb-3 ">
          <label
            class="block text-gray-700 text-sm font-bold  w-48 "
            for="username"
          >
            Adresse
          </label>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-6/12	"
            id="username"
            type="text"
            placeholder="Adresse"
          />
        </div>
        <div class=" flex   mb-3 ">
          <label
            class="block text-gray-700 text-sm font-bold  w-48 "
            for="username"
          >
        
          </label>
          <div className=" bg-red-500 "></div>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-6/12	"
            id="username"
            type="text"
            placeholder="Ville"
          />
        </div>
        <div class=" flex   mb-3 ">
          <label
            class="block text-gray-700 text-sm font-bold   w-48 "
            for="username"
          >
        
          </label>
          <div className=" bg-red-500 "></div>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-6/12	"
            id="username"
            type="text"
            placeholder="Pays"
          />
        </div>
        <div class=" flex   mb-3 ">
          <label
            class="block text-gray-700 text-sm font-bold   w-48 "
            for="username"
          >
            Numéro de téléphone
          </label>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-6/12	"
            id="username"
            type="text"
            placeholder="*********"
          />
        </div>
        <div class=" flex mb-7 ">
          <label
            class="block text-gray-700 text-sm font-bold   w-48 "
            for="username"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-6/12	"
            id="username"
            type="text"
            placeholder="abcd@gmail.com"
          />
        </div>
        <div className=" border-b-2  w-64 mb-5 ">
          Mode de paiement
        </div>
        <div className=" h-24 w-full border-2 border-black mb-5  "></div>
        <button class="rounded-full bg-orange md:text-sm text-white font-semibold md:p-1 md:px-3 ">
           Envoyer
         </button>
      </div>
    </div>
  );
}
