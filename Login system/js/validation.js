const submit = document.getElementById('button-submit');

submit.addEventListener('click', () => {
    console.log(getValue())
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();


const name = document.getElementById('navn');
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
