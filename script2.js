function validate(event) {
	event.preventDefault();

	var myName = document.getElementById("name");
	checkInput(myName);
	var myEmail = document.getElementById("email");
	checkInput(myEmail);
	var mySubject = document.getElementById("subject");
	checkInput(mySubject);
	var myText = document.getElementById("text");
	checkInput(myText);

		
	if (checkInput(myName) && checkInput(myEmail) && checkInput(mySubject) && checkInput(myText)) {
	
	var message = document.getElementById("message").innerHTML = "Спасибо, Ваша заявка отправлена!";
	}
}



function checkInput(input) {
	
	var value = input && input.value;

	if (value === '') {
		input.style.borderBottom = '3px solid red';
		return false;
	} else {
		input.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
		return true;
	}
}

var form = document.getElementById("form");

form.addEventListener('submit', validate);

