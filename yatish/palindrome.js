function isPalindrome(str){
 var lowerCaseString=str.toLowerCase();
 for(var i=0;i<str.length/2;i++){
    if(lowerCaseString[i]!==lowerCaseString[str.length-1-i])return false;
 }
 return true;
}
