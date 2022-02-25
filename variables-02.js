//Instructions
// - Check the instructions in the summary file and calculate the current year
let currentYear = new Date().getFullYear();
console.log(typeof (currentYear)); // confirms the variable currentYear is a number in the console.

//console log the result
console.log('current year result: ', currentYear); //should be the value of the currentYear variable
//don't change this line
if (typeof module !== 'undefined') {
    module.exports = currentYear;
}
