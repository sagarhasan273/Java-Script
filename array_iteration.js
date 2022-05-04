const array = ['sagar', 'hasan', 'mitul', 'molla', 'mino'];
let txt = '';

array.forEach(myFunction);

function myFunction(value, index, array){
    txt += value + "\n";
    console.log(array)
    console.log(index)
}
console.log(txt);