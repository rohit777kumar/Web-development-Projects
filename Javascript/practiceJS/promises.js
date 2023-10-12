// 2s rollno
//  2s age and name
//Promises:-



const obj1 = new Promise((resolve, reject) =>{        //new promises is constructor
    
    setTimeout(() => {let roll_no = [1,2,3,4,5];
   resolve(roll_no);  //resolve
  // reject("error is occuring!")  //reject
    }, 2000);
} );

const getBiodata = (indexdata) =>{
    return new Promise((resolve, reject) =>{
        setTimeout( (indexdata) => {
            let biodata ={
                name:'Rohit',
                age:25
                
            }
            resolve(`My roll_no is ${indexdata}.My name is ${biodata.name}and My age is ${biodata.age}`)
        })
    }, 2000, indexdata)
}


//use then and catch method for resolve and reject promise:-
//promise consume resolve:
obj1.then((rollno)=>
 {   console.log(rollno);
  return getBiodata(rollno[1]);
}).then((rollno)=>                   
 {   console.log(rollno);
   //reject:
}).catch((e) =>{
    console.log(e);
    })

//reject:

/*-------------------------------------------------------------------------------------------------*/
//Async:- it is keybord is added to a function to return a promises rether than returning the value.
//await:- await keybord  makes a function wait for a Promise.

/*async function getdata(){                 //async------>return promises

    const mydatastored = await obj1;     // await ---->promise
     console.log(mydatastored);

       const bio = await getBiodata();
      console.log(bio)
}
getdata();
*/

//Example:- async and await:-
/*----------------------------------------------------------------------------------------*/

//async:--
/*async function  myfile(){

    let fileloded = false;

    if(fileloded){                          //async
        return "File is loded";
    }else{
        throw 'File is not loded';
    }

}
 
async function myprocess(){

try{ 
let message = await myfile();    // await 
console.log(message);            //try and catch method   
}
catch(error){
    console.log(error)
}

}
myprocess();*/


/*myfile().then(value =>
     console.log())
.catch
(error => console.log(error));*/



