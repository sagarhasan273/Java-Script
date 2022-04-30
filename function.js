function myFunction(){
    const person = {
        firstName : "Sagar",
        lastName : "hasan",
        fullName : function(){
            return this.firstName +" "+ this.lastName;
        }
    }
    document.getElementById("demo").innerHTML = person.firstName;
    document.getElementById("demo1").innerHTML = person.fullName();

}