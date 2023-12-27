const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const forage = document.getElementById('forage');
const address = document.getElementById('address');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (event)=>{

	
	checkInputs();
	
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.form-control');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}


function checkInputs() {
	
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
    const forageValue = forage.value.trim();
	const addressValue = address.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	
	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Enter your first name');
	}else if (firstnameValue.length >=30 ) {
        setErrorFor(firstname, 'firstname can not be exeed 30 character.')
    }  else {
		setSuccessFor(firstname);
	}
	
	
	if(lastnameValue === '') {
		setErrorFor(lastname, 'Enter your last name');
	}else if (lastnameValue.length >=30 ) {
        setErrorFor(lastname, 'lastname can not be exeed 30 character.')
    }  else {
		setSuccessFor(lastname);
	}
	
	
	

	if(forageValue === '') {
		setErrorFor(forage, 'calculate your age');
	} else {
		setSuccessFor(forage);
	}
	
	
	if(addressValue === '') {
		setErrorFor(address, 'please enter your address');
	} else {
		setSuccessFor(address);
	}
	

	if(emailValue === '') {
		setErrorFor(email, 'please enter valied email address');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Enter valied sername!');
	}else if (usernameValue.length >=10  ) {
        setErrorFor(username, 'username can not be exeed 10 character.')
    }else if (usernameValue.indexOf(' ') >= 0) {
        setErrorFor(username, ' should not contain spaces..Please enter a valied username..')
    }else if (!isUsername(usernameValue)) {
		setErrorFor(username, ' Username should only contain with simple case letters');
	} else {
		setSuccessFor(username);
	}
	
	

	if(passwordValue === '') {
        setErrorFor(password, 'Password is required');
    }else if (passwordValue.length < 6  ) {
        setErrorFor(password, 'Password must be at least 6 character.')
    }else if (passwordValue.length >= 15  ) {
        setErrorFor(password, 'Password must be less than 15 character.')
    }else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'password only allow to input letters and numbers');
	}else if (!isPasswordfor(passwordValue)) {
		setErrorFor(password, 'password allow to input  at least one number');
	}else {
        setSuccessFor(password);
    }
	
	
	if(password2Value === '') {
		setErrorFor(password2, 'please confirm your password');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}


}		


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const p = formControl.querySelector('p');
	formControl.className = 'form-control error';
	p.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function isUsername(username) {
	return /^[a-z]+$/.test(username);
}

function isPassword(password) {
	return /^[0-9a-zA-Z]+$/.test(password);
}

function isPasswordfor(password) {
	return /\d/.test(password);
}




