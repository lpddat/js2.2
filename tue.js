////Ziffzubb

function ziffZubb(start, end) {
  for (let i = start; i <= end; i++){
      if (i % 5 === 0 && i % 3 === 0){
          console.log("ZiffZubb");
      } else if (i % 5 === 0) {
          console.log("Zubb");
      } else if (i % 3 === 0) {
          console.log("Ziff");
      } else {
          console.log(i);
      }
  }
}
ziffZubb(1, 20);


//capture time
var minutes = (new Date()).getMinutes();
console.log(minutes);

var hours = (new Date()).getHours();
console.log(hours);

var d = new Date();
var yr = d.getFullYear();
var mon = d.getMonth();
var ds = d.getDate();
console.log("year: " + yr + ", month: " + mon + ", date: " + ds);


let yourAgeInMilliseconds = Date.now() - new Date("1996-01-01");
console.log(yourAgeInMilliseconds)

//advanced random number

function getRandomInt(start, end){
	let result = 0;
	let addition = Math.floor(Math.random() * (end - start + 1));
	result = start + addition;
	console.log(result);
}

for(let i = 0; i < 100; i++){
	getRandomInt(5,8);	
}

// var arr = ["apple", "orange", "kiwi"];
// function getRandomItem(arr){
// 	let index = getRandomInt(0,	arr.length - 1);
// 	return arr[index];	
// }
// console.log(getRandomItem(arr));


//nested for loop
function temp(n) {
	for (var i = 1; i < n + 1; i++) {
	  var s = "";
	  for (var j = 0; j < i; j++) {
		s = s + i + " ";
	  }
	  console.log(s);
	}
  }
  temp(8)

function temp2(){
	for (var i = 0; i < 8; i++) {
		var temp = "";
		for (var j = 0; j < 8; j++) {
		  if ((i + j) % 2 === 0) {
			temp = temp + "  ";
		  } else {
			temp = temp + "#";
		  }
		}
		console.log(temp);
	  }
}
temp2();

//iterate over array

var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function payEachDay() {
  for (var index = 0; index < 10; index++) {
	 // var num = index;
	 // income = num * 25;
    console.log("Peter earned " + workingHours[index]*25 + "$ today.");
  }
}
payEachDay();

function income() {
	var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
    var totalSalary = 0;
    for (var index = 0; index < workingHours.length; index++){
        var salary = workingHours[index] * 25;
        totalSalary += salary;
        console.log(`Peter earned ${salary}$ today!`);
    }
    console.log(`Peter has earned ${totalSalary}$ in total`);
}
income()


// var year = [];
// for (let index = 0; index < 250; index++) {
//   function getRandomInt(start, end) {
//     temp = Math.floor(Math.random() * (end - start) + start);
//     return year.push(temp);
//   }
//   getRandomInt(6, 8);
// }
// console.log(year);
// var workingHoursYear = year.reduce(add, 0);
// function add(acc, number) {
//   return acc + number;
// }
// console.log(workingHoursYear * 25);


//// Truthy/Falsy
const one = 1;

if (one) {
  console.log("Is truthy");
}

const zero = 0;

if (zero) {
  console.log("Is truthy");
} else {
  console.log("Isn't truth");
}