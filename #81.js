function display (num){
    console.log("Result is",  num);
}

function myCallback(num1, num2, callback){
    let sum = num1 + num2;
    if (callback) callback(sum);
    return sum;
}

let result = myCallback(5, 5);