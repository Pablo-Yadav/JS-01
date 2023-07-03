class Calculator {
    constructor(){
      this.result = 0;
    }
    addNumber(num){
      this.result+=num;
    }
    subNumber(num){
      this.result-=num;
    }
    mulNumber(num){
      this.result*=num;
    }
    divideNumber(num){
      if(num!=0){
        this.result/=num;
      }
      else{
        console.error("Divide by Zero is not defined");
      }
    }
  
    clear(){
      this.result=0;
    }
    get Result(){
        return this.result;
    }
    calculate(str){
        try{
        let res=eval(str.replace('\s+',''));
        
        if(res){
            return res;
        }}
        catch(err){
            console.log(err.message);
        }
    }
  }