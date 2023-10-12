
//spread operator:-The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.



// let a = [10,20,30];
//   let b = a;
//   console.log(a);
//   console.log(b);



//   let aa = [10,20,30];
//   let bb = aa;
//   console.log(...aa,60,70,80);
//   console.log(bb);


//   let a = [10,20,30];
//   let b = a;
//   a[0]=59;
//   console.log(a[0]);
//   console.log(b[0]);

let ga = [10,20,30];
let ba =[...ga];
ga[0]=59;
console.log(ga[0]);
console.log(ba[0]);





const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//Check the result object in the console:
console.log(myUpdatedVehicle);