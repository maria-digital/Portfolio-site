//for ( i = 0; i < 3; i++) {
//	console.log(i);
//}

//var myName = document.getElementById("name");
//console.log(myName);

/*var form = document.getElementById("form");

function validate(event) {
	event.preventDefault();
	var myName = document.getElementById("name");
	var myNameValue = myName && myName.value;
	var myEmail = document.getElementById("email");
	var myEmailValue = myEmail && myEmail.value;
	var mySubject = document.getElementById("subject");
	var mySubjectValue = mySubject && mySubject.value;}


function checkForm(form) {
	
	var myForm = document.querySelectorAll(".check-form");
	var myFormValue = myForm && myForm.value;
	if (myFormValue === '') {
		myForm.style.borderBottom = '3px solid red';
	} else { 
		myForm.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
		}
	}
	

form.addEventListener('submit', validate);
*/


var form = document.getElementById("form");

function validate(event) {
	event.preventDefault();
	var myName = document.getElementById("name");
	var myNameValue = myName && myName.value;

	if (myNameValue === '') {
		myName.style.borderBottom = '3px solid red';
	} else {
		myName.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
	}
}

form.addEventListener('submit', validate);