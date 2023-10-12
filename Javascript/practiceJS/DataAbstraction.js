function car(color,cost,milage){
    this.color=color;
    this.cost=cost;
    this.milage=milage;
    let priceincreaseNextYear=20000;
   this.getDetail =function(){
        console.log(`color of car is ${this.color}`);
        console.log(`cost of car is ${this.cost} `);
        console.log(`milage of the car is ${this.milage}`)
    }
   this.getNextyearcarPrice = function(){
        console.log(this.cost + priceincreaseNextYear);
    }
} 

let swift =new car("Red",80000,21.17);
swift.getDetail();
swift.priceincreaseNextYear = 5000;
swift.getNextyearcarPrice();