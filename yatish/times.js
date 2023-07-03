function calculateTime(n){
    const startTime= new Date();
    var sum=0;
    for(var i=1;i<=n;i++){
    sum+=i;
    }
    console.log(sum);
    const endTime=new Date();
     return (endTime-startTime)/1000;
}