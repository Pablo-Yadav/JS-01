function calculateTotalSpentByCategory(transactions) {
 
    let mp=new Map();
    for(let transaction of trans){
        let {itemName,category,price} = {...transaction};
        if(mp.has(category))
        {
            let val=parseInt(mp.get(category));
            val+=parseInt(price);
            mp.set(category,val);
        }
        else{
            mp.set(category,price);
        }
    }

    var obj = Object.fromEntries(mp);
    var jsonString = JSON.stringify(obj);

    return jsonString;
  }