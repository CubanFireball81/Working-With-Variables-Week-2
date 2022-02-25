/*Instructions
- Greet your friend by printing a message to the console.
*/
//your code here
var myFriend = 'Jeff'
var greeting = `Greetings ${myFriend}.`

///////////////
function greetings() {
  //also your code here
  return greeting;
  ///////////////
}

//leave this line unchanged to console log the results
console.log('results: ', greetings())

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings
}
