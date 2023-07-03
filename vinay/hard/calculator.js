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
        console.error("Divide by Zero is not defined")
      }
    }
    calculate(expression) {
        let sanitizedExpression = expression.replace(/\s/g, '');
      
        
        let isValidInput = /^[0-9+\-*/().]+$/.test(sanitizedExpression);
        if (!isValidInput) {
          throw new Error('Invalid input.');
        }
      
        let result = eval(sanitizedExpression);
        return result;
      }
    clear(){
      this.result=0
    }

    getResult(){
        return this.result;
    }
  }
  