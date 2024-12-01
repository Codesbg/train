// manupulation on arrays 

// map 
const array =[1,3,4,5,6,7,8,8,9,7,6];
console.log(array);
 const doubleNum = array.map((array)=> 2*array);
 console.log(doubleNum);
 // map whole array get operated


// filter
// only some elements get out from array

const events = array.filter ((array) => array%2 != 0);
console.log(events);

//  reduce 
const product = array.reduce((acc,array) => acc*array , 1);
console.log(product);
