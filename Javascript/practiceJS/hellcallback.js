//callback hell:-


//2s after roll no.
//2s after 2name and age.
//2s after gender.

//use settime out again and again nested callback hell:-

const  getroll_no = () =>{
    setTimeout(()=>
    {console.log("api roll_no is given:-");
   
    let roll_no =[1,2,3,4,5];
        console.log(roll_no);

         setTimeout((roll_no)=>{
            const biodata ={
                name:"Rohit",
                age: 26
            }
            console.log(`My name is  ${biodata.name} and iam ${biodata.age} years old. My rollno is ${roll_no}.`)

             setTimeout((name) =>{
                biodata.gender = "Male";
                console.log(`My name is  ${biodata.name} and iam ${biodata.age} years old. My rollno is ${roll_no} and iam a ${biodata.gender}.`)
             },2000, biodata.name);

          },2000,roll_no[1]);

     },2000);
    
}
getroll_no();






