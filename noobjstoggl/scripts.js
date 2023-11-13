const x = 35;
const y = 140;
const button = document.getElementById('button');
function show() {
document.getElementById('demo').style.opacity = '1';
button.addEventListener('click', nah);
button.removeEventListener('click', show);
}
function nah() {
document.getElementById('demo').style.opacity = '0';
button.addEventListener('click', show);
button.removeEventListener('click', nah);
}
let z = x + y;
document.getElementById("demo").innerHTML =
"The total is: " + z;
