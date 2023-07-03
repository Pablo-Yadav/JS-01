function isPalindrome(str) {
    let len=str.length;
    for(let i in str){
        if(i<=(len/2))
        {
            if(str[i]==str[len-i-1]) continue;
            return false;
        }
    }
    return true;
  }

console.log(isPalindrome("palap"));