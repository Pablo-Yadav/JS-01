function isAnagram(str1,str2){
    if(str1.length!==str2.length)return false;
    var arr1=str1.split('');
    var arr2=str2.split('');
    
    str1=arr1.sort().join('');
    str2=arr2.sort().join('');
    if(str1===str2)return true;
    return false;

}