//Array methods:-

//Map():- creates a new array from calling a function for every array element.


/*const oldarr = ["Rohit","Atul","Sahil","Ankit","Shubham"];
console.log(oldarr[2]);*/


//simple function:-

/*const newarr = oldarr.map(function(cvalue){
    return cvalue;
});
console.log(newarr);*/


//aeeow function:-
/*const newarr = oldarr.map((cvalue)=>{
    return `My name is ${cvalue}` ;
});
console.log(newarr);*/



/*const newarr = oldarr.map(function(cvalue,i){
    return i+"="+cvalue;
});
console.log(newarr);*/

const studentdata =[

     { id:1, name:"Rohit", degree:"MCA"},
     { id:2, name:"Atul", degree:"BCA"},
     { id:3, name:"Nikhil", degree:"MSC"},
     { id:4, name:"Bunty", degree:"MBA"},
     { id:5, name:"Kholi", degree:"MCA"},

     ];

 const newdata =studentdata.map((cvalue)=>{
    return`My name is ${cvalue.name}. My highest Degree is ${cvalue.degree}.`
 })
  console.log(newdata);







/*---------------------------------------------------------*/ 
