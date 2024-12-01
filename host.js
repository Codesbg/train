// for var and const
/*console.log(y);
var y=34; // because hosting allow first define then execute it
// or if we write as
var p=2;
console.log(p); // here in this case first we have initialized the value then console

//  let same concept as const
console.log(u);
let u=2.2;
// we can write as
let u2=39;
console.log(u2);
*/
/* let , var , const are 3
where const and let block scope 
where var does not
var function scoped is outside the block 
but let and const are not their scope is restricted inside a particular block*/
//lexical scope
{

    //{ scope}

    let a=3;
    var b=8;
    const c=9;

    console.log(a);
    //console.log(b);
    console.log(c);
}
//console.log(a);
console.log(b);
//console.log(c);



