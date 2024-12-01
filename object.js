// object
let student = {
    name:"firstname + middlename",
    age : "age",
    course:"subjects"

};
 console.log(student);
 console.log(typeof (student));
 /*console.log(student.age);
 console.log(student.course);
 console.log(student.name);*/
 // object ke andar ki cheze hum . laga ke acess karte hai taht is called dot notation
 // then second way of access is braces with inverted coma
 console.log(student["age"]);
 console.log(student["course"]);
 console.log(student["name"]);
  
 //copy by value and copy by reference

 // by val
 let q="sbg";

 let p=q;

  p="jbp";
 console.log(q);
 console.log(p); // value did not copied

 //  by reference

 let r ={
    rollnumber:"rno"

 };
 let s=r;
  s ={
   phone :"pno"
 };

 r=s;
  console.log(s);
  console.log(r); // value get copies completely