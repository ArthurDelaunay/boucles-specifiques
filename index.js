// 01 - Map Double
// let array = [1, 2, 3, 4, 5]
// let double = array.map( (number) => {
//     return number * 2
// })
// console.log(double)

// 02 - Map Names
// let longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe",
//     },
//     {
//         firstName: "John",
//         lastName: "Smith",
//     },
// ]
// let shortNames = longNames.map( (name) => {
//     return {
//         name: name.firstName +" "+ name.lastName
//     }
// })
// console.log(shortNames)

// 03 - Filter Numbers
// let array = [1, "toto", 34, "javascript", 8]

// let numbers = array.filter((data) => {
//     return typeof(data) === "number"
// })

// console.log(numbers)

// 04 - Filter Even
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// let even = numbers.filter( (number) => {
//     return number % 2 === 0

// })
// console.log(even)

// 05 - Cakes
// let cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]
// let chocolateCake = cakes.filter ( (cake) => {
//     return cake.flavor === "chocolate"

// })
// let chocolateCakeStatus = chocolateCake.map( (cake) => {
//     return cake.status = "sold out !"

// })
// console.log(chocolateCake)

// 06 - Cake v2
// let pie = cakes.find( (cake) => {
//     return cake.name === "pie"

// })
// console.log(pie)

// 07 - Factorielle forEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let factorial = 1
// numbers.forEach( (number) => {
//     factorial *= number

// })
// console.log(factorial)

// 08 - Chess board

// let boxes = [0, 1, 2, 3, 4, 5, 6, 7]

// boxes.forEach( (_box, index) => {
//         let raw = ""

//     boxes.forEach( (indexLign) => {
//         if ((indexLign + index) % 2 == 0){
//             raw += "[ ]"
//         }
//         else {
//             raw += "[X]"
//         }
//     })
//     console.log(raw)
// })

// 09 - Exercice 3 bis
// const array = [12, 55, "hello", true, { isStudent: false }, 3]
// let numbers = array.filter((data) => {
//     return typeof(data) === "number"
// })
// console.log(numbers)