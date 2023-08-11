module.exports = function check(str, bracketsConfig) {
  let brck = [];
  for (let i = 0 ; i < bracketsConfig.length; i++) {
    if (bracketsConfig.length == 1) {
      brck += bracketsConfig[i];
    } else {
      for(let j = 0 ; j < bracketsConfig[i].length; j++) {
      brck += bracketsConfig[i][j];
      }
    }
  }

  let newStr = str;

  for (let c = 0; c < brck.length; c++) {
    if (brck.includes(",")) {
      brck = brck.replace(",", "");
    }
  }
  for ( let j = 0; j <= str.length; j++ ) {
    for (let z = 0; z <= brck.length; z = z + 2) {
      let dubleBrackets = brck[z] + brck[z+1];
      if (newStr.includes(dubleBrackets)){
        newStr = newStr.replace(dubleBrackets, "");
      }
    }
  }

  console.log(brck.length, "brck.length")
  // console.log(bracketsConfig, "скобки ->",brck, " остаток ->", newStr);
  console.log("скобки ->",brck, "было ->", str, " остаток ->", newStr);
  if (newStr.length >= 1) {
    console.log(newStr.length, );
    return false
  }
  
  return true;
}
