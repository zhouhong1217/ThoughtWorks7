module.exports = function main(email, suffixes) {
  // Write your code here
    function getLastName(email){
      var arr = email.split('@');
      //split() 方法用于把一个字符串分割成字符串数组。
      return arr[arr.length-1];
  }
  let a = getLastName(email);
  if(suffixes.indexOf(a)>-1){
    return true;
  }else{
    return false;
  }
};
