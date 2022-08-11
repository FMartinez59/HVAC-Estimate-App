const data = require("../../Product.json")
// console.log(data)
let type = "Furnace";
let ton = "2.0"


// let res = data.map(
//     unit=> unit.type === type,
//     console.log(unit) 
// )
const newData = []; 
data.map(unit => {if (unit.type === type && unit.tons === ton){
    newData.push(unit)
} 
}),
console.log(newData)

// console.log(res)