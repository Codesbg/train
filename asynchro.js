//callbacks - function passes an argument and to be called after some operation is successfully executed
// set time out
function input(callback) {
    setTimeout(()=>{
    let data="input";
        callback(data, null)
    }, 6000);
}
function handelInput(data, error) {
   if (error) {
    console.error(error);
   } 
   else{
    console.log(data);
   }
}
console.log("start")
input(handelInput);

// event queue
//event loop

// problem in call back is { callback hell } also called pyramid of doom

