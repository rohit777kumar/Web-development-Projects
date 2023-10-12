/*Destructuring assignment:- is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.*/
/*The two most used data structures in JavaScript are Object and Array.

 1.  object Destructring:-Objects allow us to create a single entity that stores data items by key.
 2.  Array Destructring:-Arrays allow us to gather data items into an ordered list.*/ 




//old method of declaring array:-

/*let myprogramming= ["java","python","javascript","c++","machine learning"];

let count1 = myprogramming[0];
let count2 = myprogramming[1];
let count3 = myprogramming[2];
let count4 = myprogramming[3];
let count5 = myprogramming[4];

console.log("My favourate programming language :"+ count3);*/


//destructring array:-


let myprogramming= ["java","python","javascript","c++","machine learning"];
let [count1,count2,count3,count4,count5] = myprogramming;
console.log(`My favourate programming language :${count2}`);


let programming= ["java","python","javascript","c++","machine learning"];
let [coun1,,,,coun5] = programming;
console.log(`My favourate programming language: ${coun1} and second is ${coun5}`);



//Object Destructring:-
//old method:-
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
 console.log(`the title is${options.title} and width is ${options.width}or height is ${options.height}`)  



 //Destructring method:-
 let opt = {
    title: "Menu",
    width: 100,
    height: 200
  };
  let {title,width,height} =opt;
 console.log(`the title is${title} and width is ${width}or height is ${height}`)  


//eg:-
 let data = {
    names:"Rohit",
    roll_no:26,
    intrest:"Cricket",
    hobbies:{
        first:"music",
        sec:"Running"
    }
 };


let {names,roll_no,intrest,hobbies} = data;
console.log(`My name is ${names}.My roll_no is ${roll_no}.Iam intrested in ${intrest}and my hobbies are ${hobbies.sec} and ${hobbies.first}.`)



//Rest parameter:

let sum = (a,b,c,d,e,f)=>{   //problem in parameters 
    console.log(a+b+c+d+e+f)
}
sum(1,23,6,7,8,9,9);


function summ (...inputs){   //solve problem.
    console.log(...inputs);
    let total = 0;
    for(let i of inputs){
        total += i;
    }
    console.log(total);
}
summ(1,23,6,7,8,9,9);
