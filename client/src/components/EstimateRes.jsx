import Popup from "./Popup";
import { useEffect, useState } from "react";
const data = require("../Product.json");


// import { option } from ("./Popup.jsx");
// console.log(data)


const GetData = ({setType}) => {
  // const newData = []; 
  // data.map(unit => {
  //   if (unit.type === setType && unit.tons === setTon){
  //     newData.push(unit)
  // } 
  // }),
  // console.log(newData)
  
  
  return (
  <div>
    <p> {setType}</p>
  </div>
)
}

// let res = data.map(
//     unit=> unit.type === type,
//     console.log(unit) 
// )

export default GetData
// Hey im trying to make a little function in a site where they fill out a form and it gets the criteria using useState to pull an estimate from an api. I have this bit of code where I am getting an error 