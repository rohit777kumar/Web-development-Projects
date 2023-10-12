// Call back function:--
//example 1 :-

const perone =(friend,callfrind) => { //argument passs callback
    console.log("iam busy rignt now iam with"  + friend +"i will call you back");
    callfrind();
}

const pertwo =() => {
    console.log('hey therew is the way tro ')
}

perone("rohit",pertwo);




//example-2
const peone =(friend,frind) => {
    console.log(`iam busy rignt now iam with ${friend},i will call you back`);  //template litrals.
    frind();
}

const petwo =() => {
    console.log('hey therew is the way tro ')
}

peone("rohit",petwo);// call back

//callback function :-passed as an argument to another function. can run after another function has finished.


//example3:-
// second function run first i need to first to run first.(problem)

/*const fer =() =>{
    setTimeout(()  =>{        //settimeout method   
        console.log('iam rohit');
    },5000);
  
   
}
const frop = () =>{
    console.log("iam 25 years old");
}

fer();
frop();*/

//now the first function is run:-

const myvalue = (friend,devo) =>{
    setTimeout(() =>{
        console.log(`my first run ${friend}` );
        devo();
},5000)
}

const mydetail= () =>
{
    setTimeout(() =>{  console.log('second run')},6000)

}
myvalue("rohit",mydetail);
