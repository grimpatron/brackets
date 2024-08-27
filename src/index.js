module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  const config = bracketsConfig.map((item) => item.join(''));

  for (let index = 0; index < 200; index++) {
    if (newStr.includes(config[0])) {
      newStr = newStr.replace(config[0], '');
    } else if (config.length > 0 && newStr.includes(config[1])) {
      newStr = newStr.replace(config[1], '');
    } else if (config.length > 1 && newStr.includes(config[2])) {
      newStr = newStr.replace(config[2], '');
    } else if (config.length > 2 && newStr.includes(config[3])) {
      newStr = newStr.replace(config[3], '');
    } else if (config.length > 3 && newStr.includes(config[4])) {
      newStr = newStr.replace(config[4], '');
    }
  }

  if (newStr.length > 0) {
    return false;
  } else {
    return true;
  }
};

// module.exports = function check(str, bracketsConfig) {
//   let brck = [];
//   for (let i = 0 ; i < bracketsConfig.length; i++) {
//     if (bracketsConfig.length == 1) {
//       brck += bracketsConfig[i];
//     } else {
//       for(let j = 0 ; j < bracketsConfig[i].length; j++) {
//       brck += bracketsConfig[i][j];
//       }
//     }
//   }

//   let newStr = str;

//   for (let c = 0; c < brck.length; c++) {
//     if (brck.includes(",")) {
//       brck = brck.replace(",", "");
//     }
//   }
//   for ( let j = 0; j <= str.length; j++ ) {
//     for (let z = 0; z <= brck.length; z = z + 2) {
//       let dubleBrackets = brck[z] + brck[z+1];
//       if (newStr.includes(dubleBrackets)){
//         newStr = newStr.replace(dubleBrackets, "");
//       }
//     }
//   }

//   console.log(brck.length, "brck.length")
//   // console.log(bracketsConfig, "скобки ->",brck, " остаток ->", newStr);
//   console.log("скобки ->",brck, "было ->", str, " остаток ->", newStr);
//   if (newStr.length >= 1) {
//     console.log(newStr.length, );
//     return false
//   }

//   return true;
// }
