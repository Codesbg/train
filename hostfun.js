/*host() // hoisting and gec
function host (){
console.log("host");
}

const hyyy =() =>{
    console.log("hyyy")
}
hyyy()

add()
var add=function {
    console.log("add");
}*/
// inside function wale variable ko jyada priority milega if there is no inside the function then outside the function wala execute hoga
/*function fun1() {
   // let c= 34;
    console.log(c)
}

// if the another value is initialized
let c= 233;
fun1()*/

// if the function is called first then written

//if function called inside another function
/*fun3( fun2())
function fun2() {
    let u= 234;
    console.log(u)
}
function fun3(params) {
    let b=245;
    console.log(b)

}*/
