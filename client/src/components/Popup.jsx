import React from "react";
import { useState } from "react";
import GetData from "./EstimateRes";
// const data = require("../../../Product.json")

// let type = "Furnace";
// let ton = "2.0"


// let res = data.map(
//     unit=> unit.type === type,
//     console.log(unit) 
// )
// const newData = []; 
// data.map(unit => {if (unit.type === type && unit.tons === ton){
//     newData.push(unit)
// } 
// }),
// console.log(newData)

// // console.log(res)



const Popup = ({ visible, handleForm, handleSubmit}) => {

 
  const [type, setType] = useState("");
  const [ton, setTon] = useState("");
  const [seer, setSeer] = useState("");
  if (!visible) return null;
  
 console.log(setTon)

 handleSubmit = (event) => {
  event.preventDefault()
 
  console.log(type)
  console.log(seer)
  console.log(ton)
}
  return (
    
    <div id="estimate-form"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">

      <form className="bg-white p-56 rounded w-200" >
        <button id="close-btn" onClick={() => { return handleForm() }} className="absolute top-4 right-0 m-5">❌</button>
        <div class="w-full px-3 mb-6 md:mb-0">

          <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-0" for="system">
            What type of System do you have?
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" name="type" 
            value={type}
            onChange={(e) => setType(e.target.value)}>
              <option value="" disabled selected hidden>Choose Type</option>
              <option >Furnace</option>
              <option >Air Handler</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-0 mt-4" for="grid-state" placeholder="Select a tonnage">
            How many tons is your System?
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            name="ton"
            value={ton}
            onChange={(e) => setTon(e.target.value)}
            >
              <option value="" disabled selected hidden>Choose Tonnage</option>
              <option >2.0 Tons</option>
              <option >3.0 Tons</option>
              <option >4.0 Tons</option>
              <option >5.0 Tons</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-0 mt-4" for="grid-state">
            What efficiency are you looking for?
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" 
            value={seer}
            onChange={(e) => setSeer(e.target.value)}
            >
              <option value="" disabled selected hidden>Choose Seer</option>
              <option>14 seer</option>
              <option>16 seer</option>

            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-0 mt-4" for="grid-state">
            What is square footage of your house?
          </label>
          <div class="relative">
            <input class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder="2700">
            </input>
            <p class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">SQ FT</p>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">

            </div>
          </div>
          <button onClick={handleSubmit} id="submit-btn" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Submit</button>
        </div>
       
      </form>
      
    </div>
    
  );
  
  }   
  


export default Popup
