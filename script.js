// 12/13/2022
// You are planning a vacation in August.
// You are given a program that takes the month as input.
// Task
// Complete the code to output "vacation", if the given month is August. Don't output anything otherwise.
// Sample Input
// August
// Sample Output
// vacation
// Handle the required condition using an if statement.
// Use console.log() for the output.

var month = readLine()
if(month == "August"){
    console.log("vacation")
};


// Break and continue
// Many tall buildings, including hotels, skip the number 13 when numbering floors -- often going from floor 12 to floor 14. It is thought that the number 13 is unlucky.
// Write a program that will number 15 rooms starting from 1, skipping the number 13. Output to the console each room number in separate line.
// Be attentive - considering the missing number, the number of last room should be greater than the count of rooms by 1.
var countOfRooms = 15;
for (i=1; i<=16; i++) {
    if (i==13)
        continue;
    console.log(i);
}

var sum=0; 
for(i=4; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  sum += i;
}
document.write(sum);

// User-Defined Functions
// It’s very common to have "Preloader" component, especially in multifunctional apps and websites.
// Create a function that will output "Loading" to the console.
// Output
// Loading

function showPreloader() {
  console.log("Loading");
}
showPreloader();