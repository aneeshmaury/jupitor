"use client"
import React from 'react';
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

  return (  <>

  
  <nav className="flex justify-between mb-4 border-b pb-3 pt-3">
<div className="text-3xl font-bold"><IoIosArrowBack/></div>
<div className="font-bold text-xl">Chat</div>
<div className="invisible">none</div>
</nav>
    <div className="max-w-md mx-auto p-4 rounded-lg">
  

      <div className="mb-4">
        <div className="bg-[#e6ebeb] bg-opacity-80 w-[250px] p-2  rounded-tr-2xl rounded-bl-2xl rounded-br-2xl inline-block">
          <p className="text-[14px]">Did not help? Chat with our expert</p>
        
        </div>
        <p className="text-[11px] text-slate-400">Few seconds ago</p>
      </div>
      <div className="mb-4 text-right">
        <div className="bg-sky-200 bg-opacity-80 p-2 px-5 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl inline-block">
          <p className="text-[14px] text-left" >I have another question</p>
        </div>
        <p className="text-[11px] text-slate-400">Few seconds ago</p>
      </div>
      <div className="mb-4">
        <div className="bg-[#e6ebeb] bg-opacity-80 w-[230px] py-2 px-3 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl inline-block">
          <p className="text-[14px]">Sure, please type in your query</p>
        </div>
      </div>
      <div className="mb-4 text-right">
        <div className="bg-sky-200 bg-opacity-80 p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg inline-block">
          <p className="text-[14px] text-left"style={{ width: '250px', wordWrap: 'break-word', padding:"1px" }} >{inputValue} </p>
        </div>
      </div>
     
      {/* More messages can be added here */}
    <div className="bg-red-500np">
      <input className="mt-20 border-2 border-black px-3 py-2 text-black rounded-sm"
          type="text"
          placeholder="Write Your Message..."
          value={inputValue}  
          onChange={handleInputChange} 
        />
    </div>
      
    </div>
    </>
  );
};

export default Main;
