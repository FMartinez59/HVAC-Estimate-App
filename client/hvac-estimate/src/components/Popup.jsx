import React from 'react'
import '../index.css'

function Popup(props) {
    return (props.trigger) ? (
      <div className='popup'>
          <div className='popup_inner'>
              <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
              {props.children}
          </div>   
          <form class="w-full max-w-lg">
  
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class=" px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="squareFeet">
          What is the square footage of your house?
        </label>
        <input name="sqft" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sqft" type="input" placeholder="2700"></input>
        <p class="text-gray-600 text-xs strong">sq ft</p>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        How many tons is your current system?
        </label>
        <div class="relative">
          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tons">
            <option>2.0</option>
            <option>3.0</option>
            <option>4.0</option>
            <option>5.0</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-8" for="cabinets">
          What cabinet is your system?
        </label>
        <div class="relative">
          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-4 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type">
            <option>Air Handler</option>
            <option>Furnace</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
    
  </form>
  </div>
) :  "";
}

export default Popup