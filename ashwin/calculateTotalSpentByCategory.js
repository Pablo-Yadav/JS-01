//2nd
function calculateTotalSpentByCategory(transactions)
{
    let ans = new Array();
    let categoryObj = new Object();
    for(let i=0;i<transactions.length;i++)
    {
        if(categoryObj[transactions[i].category] === undefined)
        categoryObj[transactions[i].category] = transactions[i].price;
        else
        categoryObj[transactions[i].category] += transactions[i].price;
    }

    for(key in  categoryObj)
    ans.push({[key]:categoryObj[key]});

    return ans;
}