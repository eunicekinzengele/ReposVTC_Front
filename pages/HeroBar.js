import React from "react";

export default function HeroBar() {
  return (
    <div className=" text-center pb-44">
      <div className=" bg-[url('../Images/HeroImg.png')] bg-no-repeat bg-center bg-cover object-contain relative w-full h-96 ">
        <div className=" border-2 border-yellow-400 absolute bottom-0 right-0 left-0 w-full h-full bg-black/60 pt-24  flex justify-center text-white">
          <div className=" text-center space-y-4">
            <p className=" text-base">Véhicule de tranport avec chauffeur</p>
            <h1 className=" text-3xl">
              Service de taxi et location <br />{" "}
              <span className=" text-orange">véhicule</span>
            </h1>
          </div>
        </div>
        <div className=" w-full border-2 border-red-600 flex justify-center pt-80 absolute  z-10">
          <div className=" border-2 shadow-lg shadow-black/50 bg-white w-4/5 h-48  ">
            A
            </div>
        </div>
      </div>
    </div>
  );
}
