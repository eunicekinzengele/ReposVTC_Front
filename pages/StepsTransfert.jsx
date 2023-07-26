import React from "react";
import Image from "next/image";
import QuestionMarkss from "../Images/QuestionMarkss.png";
import step1 from "../Images/step1.png";
import step2 from "../Images/step2.png";
import step3 from "../Images/step3.png";
import step4 from "../Images/step4.png";
import fleche from "../Images/fleche.png";

export default function () {
  return (
    <div>
      <div className=" w-full h-40 px-24 flex justify-between items-center">
        <h1 className=" text-3xl">
          Le transfert aéroport, comment <br /> ça marche?
        </h1>
        <Image className=" mr-20" src={QuestionMarkss} />
      </div>
      <div className=" flex justify-center items-center pt-5">
        <div className=" h-80">
          <div className=" w-52 h-72 flex ">
            <div className=" ">
              <div className=" flex justify-center">
                <Image className=" w-36 ml-14" src={step1} />
              </div>
              <div className="   w-32 h-28 p-2 shadow-xl shadow-yellow-500">
                <p className=" text-xs">
                  Lorem ipsum sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className=" flex items-center w-20 ">
              <Image className=" " src={fleche} />
            </div>
          </div>
        </div>
        <div className=" h-80">
          <div className=" w-52 h-72 flex ">
            <div className=" ">
              <div className="  border-black  w-32 h-28 p-2 shadow-xl shadow-blue-700">
                <p className=" text-xs">
                  Lorem ipsum sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className=" flex justify-center">
                <Image className=" w-36 ml-14" src={step2} />
              </div>
            </div>
            <div className=" flex items-center w-20 ">
              <Image className=" " src={fleche} />
            </div>
          </div>
        </div>
        <div className="  h-80">
          <div className=" w-52 h-72 flex ">
            <div className=" ">
              <div className=" flex justify-center">
                <Image className=" w-36 ml-14" src={step3} />
              </div>
              <div className="   w-32 h-28 p-2 shadow-xl shadow-red-600">
                <p className=" text-xs">
                  Lorem ipsum sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="flex items-center w-20 ">
              <Image className=" " src={fleche} />
            </div>
          </div>
        </div>
        <div className="  h-80">
          <div className=" w-36 h-72 flex ">
            <div className=" ">
              <div className="  w-32 h-28 p-2 shadow-xl shadow-green-700">
                <p className=" text-xs">
                  Lorem ipsum sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className=" flex justify-center">
                <Image className=" w-36 ml-14" src={step4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
