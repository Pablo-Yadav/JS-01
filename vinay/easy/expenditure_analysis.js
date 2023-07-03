
function calculateTotalSpentByCategory(trans) {
       
    let mp=new Map();
    for(let transaction of trans){
        console.log("-->",transaction)
        let {itemName,category,price} = {...transaction};
        console.log("her",itemName,category,price)
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


  let transactions=[
    {
        itemName:"item1",
        category:"cat1",
        price: "10",
    },
    {
        itemName:"item2",
        category:"cat1",
        price: "10",
    },
    {
        itemName:"item3",
        category:"cat2",
        price: "15",
    },
    {
        itemName:"item4",
        category:"cat2",
        price: "15",
    },
  ]
  
  console.log(calculateTotalSpentByCategory(transactions));