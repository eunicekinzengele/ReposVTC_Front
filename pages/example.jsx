import React, { useState } from "react";

export default function example() {
    const [selected, setSelected]= useState(null)


    const toggle = (i) =>{
        if (selected === i){
                return setSelected (null)
        }
        setSelected(i)
    }

    const data = [
      {
        question: "question1",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua1. ",
      },
      {
        question: "question2",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua2. ",
      },
      {
        question: "question3",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua3. ",
      },
    ];

  return (
    <div className="  h-screen w-full flex justify-center items-center">
      <div className=" border-2 ">
        {data.map((item, i ) => (
                <div className=" border-2 border-black mb-5 w-52">
                    <div className=" bg-amber-300 flex justify-between items-center px-2 cursor-pointer" onClick={() => toggle (i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className="{selected === i ? ' bg-red-400 overflow-hidden ease-out hidden   ' : '  bg-red-400 block '}">{item.answer}</div>
                </div>
        )
         )}
      </div>
    </div>
  );
}

