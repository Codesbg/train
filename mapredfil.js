let arr=[1,1,1,2,3,4,1,1,1]
console.log(arr);
let data=arr.filter((a,b,c)=>{
    return a==1;
})
console.log(data);

let number=data.filter((a,b,c)=>{
    console.log("sbg");

    return a+b;
    
    
})

