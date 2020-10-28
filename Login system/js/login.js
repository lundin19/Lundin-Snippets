// Login open onclick
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Register open onclick
let modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const submit = document.getElementById('button-submit');

submit.addEventListener('click', () => {
    console.log(getValue())
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();


const name = document.getElementById('navn');
const email= document.getElementById('email')
const password = document.getElementById('password');

let eligibleToSubmit = false;

// Navn validation
if (name.value === "") {
    error(name);
    this.name = name.value;

    return false;
} else {
    this.name = name.value;
    eligibleToSubmit = true;
};

// Email validation
if (email.value === "") {
    error(email);
    this.email = email.value;
    return false;
} else if (!emailError(email.value)){
    error(email);
    this.email = email.value;
    let emailError = document.getElementById('emailError');
    emailError.style.display = 'block';
    return false;
} else {
    this.email = email.value;
    let emailError = document.getElementById('emailError');
    emailError.style.display = 'none';
    eligibleToSubmit = true;
}

// Password validation
if (password.value === "") {
    error(password);
    this.password = password.value;
    return false;
} else if (password.value.length < 8) {
    this.password = password.value;
    eligibleToSubmit = true;
    return false;
} else {
    this.password = password.value;
};

if (eligibleToSubmit = true) { 
    location.reload(); 
};
    }); });

function error(input) {
    field.classList.add('error');
    field.insertAdjacentHTML('beforeend', '<ion-icon class="error-circle" name="close-circle-outline"></ion-icon>');
}

function emailError(email) {
    // Email pattern (RegEx)
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};