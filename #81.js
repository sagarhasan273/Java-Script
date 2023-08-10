const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = removeNegs(myNumbers, (x)=>x>=0);

function removeNegs(arr, callback){
    result = []
    for(const x of arr){
        if (callback(x)) result.push(x);
    }
    return result;
}

console.log(posNumbers);