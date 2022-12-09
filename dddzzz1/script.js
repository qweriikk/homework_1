const student = "Ершова Дарья Владимировна"; 

document.getElementById("student").innerHTML = student;

let teamreal1 = prompt("реальный счёт первой команды");
let teamreal2 = prompt("реальный счёт второй команды");
let teamassumed1 = prompt("предполагаемый счёт первой команды");
let teamassumed2 = prompt("предполагаемый счёт второй команды");
if ((teamreal1==teamassumed1) && (teamreal2==teamassumed2)) {
    alert ("Счёт был угадан верно!");
}
else if (
    (teamreal1>teamreal2) && (teamassumed1>teamassumed2)
    ||
    (teamreal1==teamreal2) && (teamassumed1==teamassumed2)
    ||
    (teamreal1<teamreal2) && (teamassumed1<teamassumed2)
)   {
alert ("Счёт не угадали, но исход угадали");
} else {
alert ("Ни счёта, ни исхода не угадали");
}