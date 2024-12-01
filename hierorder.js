function sum(params) {
    console.log("hy")
}
function inner(params) {
    console.log("op")
}
sum(inner);

// call  back function or higher order function 

let arr=[1,3,4,'fyp','hello' ,true,false]

function number() {
    let result=[]
    for (let i of arr) {
        if(typeof i=='number'){
            result.push(i)
        }
        
        
    }
    console.log(result)
return result;
}
number()

function string() {
    let result=[]
    for (let i of arr) {
        if(typeof i=='string'){
            result.push(i)
        }
        
        
    }
    console.log(result)
return result;
}
string()

function boolean() {
    let result=[]
    for (let i of arr) {
        if(typeof i=='boolean'){
            result.push(i)
        }
        
        
    }
    console.log(result)
return result;
}
boolean()
// asynchronous programming
// step by step execution synchronous
//asynchronous best as it execute fast

function step1() {
    setTimeout(() => {
        console.log('Select achii si photo.......');
    }, 2000);
}
function step2() {
    setTimeout(() => {
        console.log('dhokha lagao fir......');
    }, 3000);
}
function step3() {
    setTimeout(() => {
        console.log('faltu ka bakwas likhdo manjhe caption.....');
    }, 4000);
}
function step4() {
    setTimeout(() => {
        console.log('photo dal do');
    }, 5000);
}

step1()
step2()
step3()
step4()