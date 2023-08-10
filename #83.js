const enrollProcess = true;
const marks = 80;

function enroll(callback){
    console.log("Enrollment is in process");
    setTimeout(()=>{
        if (enrollProcess){
            callback();
        }else{
            console.log("");
        }
    }, 2000);
}

function process(callback){
    console.log("Check Marks!");
    setTimeout(()=>{
        if (marks >= 80){
            callback();
        }
    }, 3000);
}
function getCirtified(){
    console.log("cirtified");
}

enroll(function(){
    process(getCirtified);
})

