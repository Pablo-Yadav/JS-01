class Calculator {

    constructor(){
      this.result = 0
    }
    addNumber(num){
      this.result+=num
    }
    subNumber(num){
      this.result-=num
    }
    mulNumber(num){
      this.result*=num
    }
    divideNumber(num){
      if(num!=0){
        this.result/=num
      }
      else{
        console.error("Not defined")
      }
    }
    // calculate(expression) {
        
    //   }
    clear(){
      this.result=0
    }

    getResult(){
        return this.result;
    }
  }