//5th
function CalculateTime(n)
{
    let sum = 0;
    let d = new Date();
    let start = d.getTime();

    for(let i=1;i<=n;i++)
    sum += i;

    d = new Date();
    let end = d.getTime();
    return (end-start)/1000;
}