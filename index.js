// 01 - Map Double
// let numbers = [1, 2, 3, 4, 5]
// let double = numbers.map( (number) => {
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
//         name: `${name.firstName} ${name.lastName}`
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
//      cake.status = "sold out !"
//      return cake

// })
// console.log(chocolateCakeStatus)

// 06 - Cake v2
// let pie = cakes.find( (cake) => {
//     return cake.name === "pie"

// })
// console.log(pie)

// 07 - Factorielle forEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let factorial = 1
// numbers.forEach( (number) => {
//     factorial *= number

// })
// console.log(factorial)

// 08 - Chess board

// let iterations = [0, 1, 2, 3, 4, 5, 6, 7]

// iterations.forEach( (lign, indexLign) => {
//         let resultLign = ""

//     iterations.forEach( (column, indexColumn) => {
//         if ((indexColumn + indexLign) % 2 === 0){
//             resultLign += "[ ]"
//         }
//         else {
//             resultLign += "[X]"
//         }
//     })
//     console.log(resultLign)
// })

// 09 - Exercice 3 bis
// const filterNumbers = (filterNumber) => {
//     numbers = filterNumber.filter((data) => {
//         return typeof(data) === "number"
//     })
//     console.log(numbers)
// }

// filterNumbers([12, 55, "hello", true, { isStudent: false }, 3])