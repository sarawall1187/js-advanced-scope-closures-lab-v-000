function produceDrivingRange(blockRange){
    return function drive(block1, block2){
        let blockOne = parseInt(block1);
        let blockTwo = parseInt(block2);
        let sum = Math.abs(blockOne - blockTwo);
  
        let range = blockRange - sum;
        if (range < 0){
            return `${Math.abs(range)} blocks out of range`;
        }
        else {
            return `within range by ${Math.abs(range)}`;
        }
    }
}

function produceTipCalculator(percentage){
    return function(tip){
        return percentage * tip;
    }
}

function createDriver() {
    let DriverId = 0;
    // return the class
    return class {
      constructor(name) {
        this.name = name;
        
        this.id = ++DriverId;
      }
    };
  }
   
//   const Driver = createDriver();