import React from 'react'
import Image from 'next/image'
import logovtc from '../Images/logovtc.png'


export default function Header() {
  return (
    <div>
        <div className=" w-full">
     
     <div className=" flex  justify-between items-center  h-20 ">
       <div className=" h-full border-2 border-red-600 overflow-hidden">
         <Image className=" mx-auto h-full w-full " alt="logo" src={logovtc}/>
       </div>

       <div class=" hidden w-full md:block md:w-auto" id="navbar-default ">
         <ul class=" md:p-7 pt-3 items-center text-sm font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
           <li>
             <a
               href="#"
               class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
               aria-current="page"
             >
               Location véhicule
             </a>
           </li>
           <li>
             <a
               href="#"
               class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
             >
               Transfert aéroport
             </a>
           </li>
           <li>
             <a
               href="#"
               class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
             >
               Véhicules
             </a>
           </li>
           <li>
             <a
               href="#"
               class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
             >
               Contact
             </a>
           </li>
         </ul>
       </div>
       <div className=" md:w-1/5 md:flex md:items-center">
         <button class="rounded-full bg-orange md:text-sm md:p-1 md:px-2">
           Connexion|Inscription
         </button>
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
  )
}