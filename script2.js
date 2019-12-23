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
}



function checkInput(input) {
	
	var value = input && input.value;
	var message = "Спасибо, Ваша заявка отправлена";

	if (value === '') {
		input.style.borderBottom = '3px solid red';
	} else {
		input.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';

    alert(message)
	}
}

var form = document.getElementById("form");

form.addEventListener('submit', validate);

