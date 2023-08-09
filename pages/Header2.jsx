import React from "react";
import Image from "next/image";
import logovtc from "../Images/logovtc.png";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

export default function Header2() {
  return (
    <div>
      <div className=" w-full">
        <div className=" flex justify-between items-center  h-20 ">
          <div className=" h-20 w-36 pl-7 ml-3 flex justify-center items-center overflow-hidden">
            <Link href="Home"> 
              
              <Image className="  " alt="logo" src={logovtc} />
            </Link>
          </div>

          <div class=" hidden w-full md:block md:w-auto" id="navbar-default ">
            <ul class=" md:p-7 pt-3 items-center  text-sm font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <Link href="Home">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-orange md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Location véhicule
                </a>
                </Link>
              </li>
              <li>
              <Link href="AirportTransfertPage">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Transfert aéroport
                </a>
                </Link>
              </li>
              <li>
              <Link href="ListOfVehiclesPage">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Véhicules
                </a>
                </Link>
              </li>
              <li>
              <Link href="ContactPage">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
                </Link>
              </li>
              <li>
              <Link href="ContactPage">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  FAQ
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" md:w-1/5 md:flex md:items-center">
          <Link href="">
            <button class="rounded-full flex items-center space-x-2 bg-orange md:text-sm text-white font-semibold md:p-1 md:px-2">
              <BsPersonCircle/> <pan>Eunice</pan>
            </button>
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
