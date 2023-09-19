import { React, useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { CiCalendarDate } from "react-icons/ci";

const moment = require("moment");

export default function Timepicker() {
  const [selectedTime, setSelectedTime] = useState(null);
  const handleTimeChange = (value) => {
    setSelectedTime(value);
  };

  return (
    <div>
      <div className=" flex w-32  ">
        <TimePicker
          className=" text-sm w-24 placeholder:italic outline-none"
          placeholder="Heure"
          defaultValue={moment()}
          showHour={true}
          showMinute={true}
          showSecond={false}
          format="HH:mm"
          value={selectedTime}
          onChange={handleTimeChange}
        />
        <span className=" flex items-center">
          <CiCalendarDate className=" text-xl text-orange" />
        </span>
      </div>
    </div>
  );
}
