function calculateTime(n){
    const startTime= new Date();
    var add=0;
    for(var i=1;i<=n;i++){
        add+=i;
    }
    const endTime=new Date();
     return (endTime-startTime)/1000;
}

// n can be any positive integer.