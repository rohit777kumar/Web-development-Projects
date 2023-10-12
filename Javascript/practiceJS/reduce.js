//Reduce():- Reduce method execute a reduceer function on each element of arry and give a single value output.
//reduce arguments:
//1.Accumulator. (add)
//2.current value. 
//3.current index.
//4.source array.
//initial value. (extend )


//sum
let arr = [15,56,2,3,5,6,7,8,9,10];
let sum = arr.reduce((accu,curr)=>{
    return accu + curr;

},);
console.log(sum);

let ar = [15,56,2,3,5,6,7,8,9,10];
let summ = arr.reduce((accu,curr)=>{
    return accu + curr;

},2); //add initial value
console.log(summ);

//Average find:-

/*let myarr =[10,20,30,40];

let avg = myarr.reduce((accu,curr,index,arr)=>{
    
        let result = accu += curr;
        if (index ===myarr.length-1){
         return result/myarr.length;
        }
            return result;
});
console.log(avg);*/


/*-----------------------------------------------------------------*/


