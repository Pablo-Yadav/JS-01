function calculateTime(n) {
   let time1 = new Date().getMilliseconds();
   let sum=0;
   for(let i=1;i<=100;i++){
     sum+=i;
   }
   let time2 = new Date().getMilliseconds();
   return time2-time1;
}

console.log(calculateTime());