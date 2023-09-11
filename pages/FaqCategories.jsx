
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { PiUserSquareBold } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";

export default function FaqCategories() {
  return (
    <div className="  w-full flex justify-center  py-16 p-5">
      <div className="  w-8/12 grid grid-cols-2 justify-between p-2">
        <div className=" space-y-5">
          <Link href="FaqPageMyAccount ">
            <div className=" w-80 space-x-2 justify-center border-2 text-orange border-orange cursor-pointer hover:bg-orange hover:text-white h-20 p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                {/* <BsPlus className=" text-lg font-semibold text-orange " /> */}
                <PiUserSquareBold className=" text-2xl"/>
              </span>
              <p className=" text-lg font-medium">
              Mon compte
              </p>{" "}
            </div>
          </Link>
          <Link href="FaqPageManage">
            <div className=" w-80 space-x-2 text-orange justify-center border-2 border-orange h-20 cursor-pointer  hover:bg-orange hover:text-white p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <MdOutlineManageSearch className=" text-3xl" />
              </span>
              <p className=" text-lg font-medium">
              Gestion de reservation
              </p>{" "}
            </div>
          </Link>
          
        </div>
        <div className=" space-y-5">
          <Link href="FaqPagePayment">
            <div className=" w-80 border-2 text-orange space-x-2 justify-center border-orange cursor-pointer  hover:bg-orange hover:text-white h-20 p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <FaMoneyBill className=" text-2xl"/>
              </span>
              <p className=" text-lg font-medium">Facturation et paiement</p>{" "}
            </div>
          </Link>
          <Link href="FaqPageGuide">
            <div className=" w-80 justify-center text-orange  border-2 border-orange cursor-pointer  hover:bg-orange hover:text-white h-20 p-2 px-3 rounded-lg flex items-center">
              <span className=" ">
                <BsPlus className=" text-lg font-semibold text-orange" />{" "}
              </span>
              <p className=" text-lg font-medium">Guide de démarrage</p>{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

