import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";

export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      
        <div className=" flex w-32  ">
          <DatePicker
          
            placeholderText="Date"
            className=" text-sm w-24 placeholder:italic outline-none" 
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy" // Format de date que vous préférez
          />
          <span className=" flex items-center">
            <CiCalendarDate className=" text-xl text-orange" />
          </span>
        </div>
      
    </div>
  );
}
