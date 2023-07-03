function calculateTotalSpentByCategory(transactions) {
    var size=transactions.length;
    var answer=new Array();
    var categoryObj=new Object();
    for(var i=0;i<size;i++){
        if(categoryObj[transactions[i].category]===undefined){
            categoryObj[transactions[i].category]=transactions[i].price;
        }else{
            categoryObj[transactions[i].category]+=transactions[i].price;
        }
    }
    for(key in categoryObj){
        answer.push({[key]:categoryObj[key]});
    }
    return answer;
  }