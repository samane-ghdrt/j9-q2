/*
   This program should check if the array `group` contains only students
*/

const students = ['Hossein', 'Jamal', 'Mehdi', 'Shaden', 'Zaynab', 'Niloofar'];
const group = ['Niloofar', 'Mehdi', 'Benyamin', 'Zaynab'];

let groupIsOnlyStudents =  (group) => {
  for(let word of group){
   if( students.indexOf(word) !==-1){
   return true;
   }else {
    return false;
   }
  }
}; // complete this statement

if (groupIsOnlyStudents) {
  console.log('The group contains only students');
} else {
  console.log('The group does not contain only students');
}

/* EXPECTED RESULT */

// The group does not contain only students
