/**
 *
 * Write a function that:
 * - takes an array of strings as input
 * - removes any spaces in the beginning or end of the strings
 * - removes any forward slashes (/) in the strings
 * - makes the string all lowercase
 * - return the new array
 * @format
 *
 *
 */

function tidyUpString(strArr) {
  // for(let newWord of strArr){
  //   newWord.trim().toLowerCase();
  //   let arrNew=newWord.split('');
  //   if (arrNew[0]==="/") {
  //     arrNew.shift();
  //   }
  //   arrNew.join('');
  // }
  strArr.filter((string)=>{
   let newString= string.trim().toLowerCase();
    let arrNew=newString.split('');
    if (arrNew[0]==="/") {
      arrNew.shift();
      arrNew.join('');
      return arrNew;
    }
    arrNew.join('');
    return arrNew;
  })
  // for (let i = 0; i < strArr.length; i++) {
  // arr[i]=strArr[i].tolowercase();
  // arr[i]=arr[i].trim();
  // let arrNew=arr[i].split('');
  // if (arrNew[0]==="/") {
  //   arrNew.shift();
  //   arr[i]=arrNew.join('');   
  // }
  // }
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  "tidyUpString function works - case 1",
  tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
  ["daniel", "irina", "gordon", "ashleigh"]
);
test(
  "tidyUpString function works - case 2",
  tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
  ["sanyia", "michael", "anthony", "tim"]
);
