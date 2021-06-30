function validateForm(){
	var firstname = document. forms["myForm"]["firstname"].value;
	var lastname = document. forms["myForm"]["lastname"].value;
	var password = document. forms["myForm"]["password"].value;
	var gender = document. forms["myForm"]["gender"].value;
	var email = document. forms["myForm"]["email"].value;
	var mobiephone = document. forms["myForm"]["mobiephone"].value;
	if(firstName === ""){
		alert("First Name must be filled ou");
		return false;
	}
	if(lastname === ""){
		alert("First Name must be filled ou");
		return false;
	}
	if(password === ""){
		alert("First Name must be filled ou");
		return false;
	}
	if(gender === ""){
		alert("First Name must be filled ou");
		return false;
	}
	if(email === ""){
		alert("First Name must be filled ou");
		return false;
	}
	if(mobiephone === ""){
		alert("First Name must be filled ou");
		return false;
	}

	
}