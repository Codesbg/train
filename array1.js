let arr =[1,2,3,4,5,6,7,8,6,5,4,34,3,21,45,6,7]
console.log(arr);
//actual array
let data1=arr.filter((a,b,c) =>
{
    return a%2!=0;
})
//2 divisible
let data2=data1.filter((a,b,c)=>
{
    return a>2;
})
console.log(data2)
//sum of greater then 2
var reduce=data2.reduce ((a,b,c,d)=>
{
    return a+b;    

})
console.log(reduce)
