function isAnagram(str1, str2) {
   let mp1 = new Map();

   for(let char of str1){
       if(mp1.has(char))
       {
          let val=mp1.get(char);
          val++;
          mp1.set(char,val);
       }
       else{
          mp1.set(char,1);
       }
   }
   let mp2 = new Map();
   for(let char of str2){
    if(mp2.has(char))
    {
       let val=mp2.get(char);
       val++;
       mp2.set(char,val);
    }
    else{
       mp2.set(char,1);
    }
   }
   
   for(let [key,value] of mp1){
      if(value!=mp2.get(key))
      {
        return false;
      }
   }
   for(let [key,value] of mp2){
    if(value!=mp1.get(key))
    {
      return false;
    }
 }
   return true;
}  

if(isAnagram("vinay1","vinay")) {
    console.log("true");
}
else{
    console.log("not working")
}