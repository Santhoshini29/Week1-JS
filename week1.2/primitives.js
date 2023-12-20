//loging in 
console.log ("hello world");

console.log (a);
//variable-- var, let ,const 
  //var -- original way 
  //let -- mostly use this 
  //const -- to assign single value 
  //var-- can change the value no error 
  var a=1;
  a=2;
  console.log(a);
 //let-- can change the value no error 
  let a=1;
  a=2;
  console.log(a);
  //const -- it occurs error 
  const a=1;
  a=2;
  console.log(a);
  //
  let firstname = "hello";
let age = 22;
let ismarried = true;

console.log("this persons name is "+firstname+" and their age is "+age )
//if else 

if(isMarried == true){
  console.log(firstName + " is married.");
}
else{
  console.log(firstName + " is not married.");
}
 //loops 
  let answer = 0;

 for(let i = 0; i<=1000; i++){
  answer++;
 }

 console.log(answer);
  
 //Complex Primitives -  Arrays and Objects
/// Arrays
const ages = [21, 22, 23, 24, 25];
const numberOfPeople = ages.length;
for(let i = 0; i<numberOfPeople; i++){
  if(ages[i] % 2 == 0){ 
    console.log(ages[i]);
  }
}

const personArray = ["ram", "sita", "laxman", "hanuman"];
const genderArray = ["male", "female", "male", "male",];
const numberOfUsers = personArray.length;
  // loop through and print all male / female names
for(let i = 0; i<numberOfUsers; i++){
      if (genderArray[i] == "male") {
         console.log(personArray[i]);
      }
  }
 
  
   

