import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className=" w-full h-screen border-2 bg-zinc-200 flex justify-center items-center">
      <div className="bg-red-600 w-64 rounded-xl h-96 md:border-2 md:w-2/5 md:h-64 md:flex ">
        <div className=" h-2/5	 rounded-t-xl bg-orange/100 text-white text-center p-4 space-y-2 pl-5 pr-5 md:w-2/5 md:h-full md:rounded-l-xl md:rounded-r-none md:space-y-5 md:pt-7 md:px-3 ">
            <h2 className=" font-semibold text-sm">Bienvenue</h2>
            <p className=" text-xs font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, molestias, excepturi quaerat facilis qui, omnisex minima.</p>
        </div>
        <div className="h-3/5 rounded-b-xl bg-white text-center flex items-center justify-center md:w-3/5 md:h-full md:rounded-r-xl md:rounded-l-none">
          <div className=" space-y-4">
            <h1 className=" font-semibold">Connexion</h1>
            <input
              className="  placeholder:italic placeholder:text-slate-400 block bg-white shadow-lg shadow-black/20  w-48 h-8 py-2 pl-3 pr-3 focus:outline-none rounded-2xl focus:border-orange focus:ring-orange focus:ring-1 sm:text-sm"
              placeholder="Votre nom"
              type="text"
              name="userName"
            />
            <input
              className="  placeholder:italic placeholder:text-slate-400 block shadow-lg shadow-black/20 bg-white  w-48 h-8 py-2 pl-3 pr-3  focus:outline-none rounded-2xl focus:border-orange focus:ring-orange focus:ring-1 sm:text-sm"
              placeholder="Mot de passe"
              type="password"
              name="userName"
            />
            <Link href="Home2">
            <button className=" bg-orange w-48 h-8 text-sm px-5 py-1 text-white font-semibold rounded-full">
                Connecter
              </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
