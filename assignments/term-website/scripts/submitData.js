function submitData(firstname, lastname, email, phone, bday, state, comment){
    
    var fistName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var phone = document.getElementById("phone");
    var bDay = document.getElementById("bday");
    var state = document.getElementById("state");
    var email = document.getElementById("email");
    var com = document.getElementById("comment");
    
    var obj = {"fname" : fistName, "lname" : lastName, "email" : email, "phoneNumber" : phone, "birthDay" : bDay, "state" : state, "comment" : com } ;
    
    var jsonObj = JSON.stringify(obj);
    
}