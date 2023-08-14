const enrollProcess = false;
const marks = 70;

function enroll(){
    console.log("Enrollment is in process");
    const promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            if (enrollProcess){
                resolve();
            }else{
                reject("Payment Failed!");
            }
        }, 2000);
    });
    return promise;
}

function process(){
    console.log("Checking Marks!");
    const promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            if (marks >= 80){
                resolve();
            }else{
                reject("Marks is not as required!")
            }
        }, 3000);
    });

    return promise;
}

function getCirtified(){
    const promise = new Promise(function(resolve){
        resolve("cirtified");
    })
    return promise
}

async function course(){
    try{
        await enroll();
        await process();
        const message = await getCirtified();
        console.log(message);
    }catch(err){
        console.log(err)
    }
}

course();

// enroll()
//     .then(process)
//     .then(getCirtified)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
