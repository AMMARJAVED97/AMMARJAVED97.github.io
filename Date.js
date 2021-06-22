// Roll no 17502;



alert("Welcome to Age calculator ,please hit ok to continue");
var dob = +prompt("enter your date on which you born");
var mob = prompt("enter your month of birth");
var yob = prompt("enter your year of birth");
var month = mob.toLowerCase();




var date = new Date();
date.setMonth(mob);
date.setDate(dob);
date.setFullYear(yob);


var currDate = new Date();
currDate.getMonth();
currDate.getDate();
currDate.getFullYear();


if (month === "january" || month === "jan" || month === "1") {
    date.setMonth(0);
} else if (month === "february" || month === "feb" || month === "2") {
    date.setMonth(1);
} else if (month === "march" || month === "mar" || month === "3") {
    date.setMonth(2);
} else if (month == "april" || month == "apr" || month == "4") {
    date.setMonth(3);
} else if (month === "may" || month === "may" || month === "5") {
    date.setMonth(4);
} else if (month === "june" || month === "jun" || month === "6") {
    date.setMonth(5);
} else if (month === "july" || month === "jul" || month === "7") {
    date.setMonth(6);
} else if (month === "august" || month === "aug" || month === "8") {
    date.setMonth(7);
} else if (month === "september" || month === "sep" || month === "9") {
    date.setMonth(8);
} else if (month === "october" || month === "oct" || month === "10") {
    date.setMonth(9);
} else if (month === "november" || month === "nov" || month === "11") {
    date.setMonth(10);
} else if (month === "december" || month === "dec" || month === "12") {
    date.setMonth(11);
} else {

    alert("please insert  a valid month of birth");

}
let diffMonth = currDate.getMonth() - date.getMonth();
let diffYear = (currDate.getTime() - date.getTime()) / 31556952000;
let year = Math.floor(diffYear);

console.log(year + " years ");
document.write(year, "  years  ");


if (currDate.getMonth() < date.getMonth()) {
    document.write(12 - (date.getMonth() - currDate.getMonth()) + " months & ")
} else if (currDate.getMonth() > date.getMonth()) {
    document.write((currDate.getMonth() - date.getMonth()) + " months & ")
} else {
    document.write(diffMonth + " months & ")
}

let diffDate = currDate.getDate() - dob;
if (currDate.getDate() > date.getDate()) {
    document.write(diffDate + " days")
} else {
    document.write(date.getDate() - currDate.getDate() + " days")
}
