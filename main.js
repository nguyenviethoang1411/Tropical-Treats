function validateForm() {
    var name = document.forms["myForm"]["fullName"].value;
    var email = document.forms["myForm"]["email"].value;
    var birth = document.forms["myForm"]["birth"].value;
	var phonenumber = document.forms["myForm"]["phonenumber"].value;
	if (phonenumber == "") {
        alert("Name must be filled out");
        return false;
	}
	
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (name.length >= 30) {
        alert("Name is too long! (Must less than 30 character!)");
        return false;
    }
    if (/[0-9]/.test(name)) {
        alert("Name must not contain number!");
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Your email is invalid");
        return false;
    }
    if (birth == ""){
        alert("Day of birth must be filled out")
        return false;
    }
   
    }
    if (document.querySelector(".checkbox1").checked == false && document.querySelector(".checkbox2").checked == false && document.querySelector(".checkbox3").checked == false && document.querySelector(".checkbox4").checked == false){
        alert("Please choose at least one interest!")
        return false;
    }
    if (document.querySelector(".radio1").checked == false){
        alert("You must agree with the condition!")
        return false;
    }

} 
$("input").on("change", function() {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
        .format( this.getAttribute("data-date-format") )
    )
}).trigger("change")