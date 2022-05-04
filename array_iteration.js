const array = ['sagar', 'hasan', 'mitul', 'molla', 'mino'];
let txt = '';

array.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + "\n";
    console.log(array)
    console.log(index)
}
function myFunction1() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const f = fruits.entries();
    
    for (let x of f) {
        document.getElementById("demo").innerHTML += x + "<br>";
        console.log(x)
    }
}

console.log(txt);