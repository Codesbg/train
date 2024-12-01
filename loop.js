//let a=prompt("hello tell something?")

//if else ladder with alert

/*let age = prompt("enter your age");
if (age > 18) {
  alert("you can vote");
} else if (age < 18) {
  alert("no you can not vote");
} else if (age == 18) {
  alert("you can vote");
} else {
  alert("default");
}


//loops

let sum=0;
let n= prompt("enter the value")
n=Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sun+=(i+1)
    console.log((i+1), "+")
}
 
alert ("sum of first " + n + "natural number is" + sum)

*/

//functions
//arrow function 
// with parameter
const sum = (p,q) =>{
  return p+q
}
 
 console.log(sum(2,4))

 //without parameters
 const print =()=>{
  console.log("print the string")
 }
 print()

 // function ke andar ek or function
 const first=()=>
 {
console.log("one")
 }
 const second =()=>
 {
  console.log("two")
 }
 //first( second )
 second (first())
 //both call together
 