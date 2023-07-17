import React from 'react'
import { ImLocation2 } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { ImClock } from "react-icons/im";

export default function Topbar() {
  return (
    <>
        <div className=" bg-Ggray h-12 content-center justify-center items-center flex">
        <div className=" flex space-x-11 text-xs text-white items-center">
          <div className=" flex items-center space-x-1">
            <ImLocation2 className=" text-lg text-orange" />
            <p>
              Kinshasa/RDC <br /> C/ Gombe Av. Unaco N° 01
            </p>
          </div>
          <div className="flex space-x-1">
            <ImMobile className=" text-lg text-orange" />
            <p>089000000</p>
          </div>
          <div className=" flex space-x-1">
            <ImClock className=" text-base text-orange" />
            <p>7h/20h</p>
          </div>
        </div>
      </div>
    </>
  )
}
