
// Arrow functions
// const square = number => number * number;

// console.log(square(5));


// const jobs = [
//     {id:1, isActive: true},
//     {id:2, isActive: true},
//     {id:3, isActive: true},
//     {id:4, isActive: false}
// ]

// const activeJobs = jobs.filter(function(job){ return job.isActive})
// const active = jobs.filter(job=> job.isActive)

// Window object
// const person =
// {
//     talk() {
//         // var self = this;
//         setTimeout(()=> {
//             console.log("this",this)
//         },2000)
//     }
// }
 
// // Notes : Arrow functions dont rebind this keyword
// person.talk()


// Map method
// const colors = ["black", "white", "gray"]

// const colList = colors.map(color => `<li>${colors}</li>`)
// console.log(colList)



// Object destructuring
// const address =
// {
//     street: '',
//     city: '',
//     country:''
// }

// const [street, city, country] = address;
// // const [ street: st] = address //Use of alias 



// Spread operator in JS
// const first = [1,2,3]
// const second = [4, 5, 6]
// const third = [7, 8, 9]

// const combined = [...first, ...second, ...third]
// console.log(combined)
// const clone = [...first]

// const one = { name: "Akshay" }
// const two = { job: "Developer" }

// const comb = { ...one, ...two, location: "Ratnagiri" }
// console.log(comb)



// Inheritance
import Teacher,{promote} from "./Teacher"

const t1 = new Teacher("Akshay", "ReactJS")
t1.teach()