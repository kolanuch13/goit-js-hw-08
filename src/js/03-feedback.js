import _ from 'lodash';

const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button');
const hereYouAre = JSON.parse(localStorage.getItem("feedback-form-state"));
let feedback = {
    userEmail: "",
    userMessage: "",
}

checkStorage();

form.addEventListener('input', _.throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({
        userEmail: email.value,
        userMessage: message.value,
    }));
}))

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    email.value = "";
    message.value = "";
})

function checkStorage() {
    if (localStorage.getItem("feedback-form-state") !== null) {
        email.value = hereYouAre.userEmail;
        message.value = hereYouAre.userMessage;
    } else {
        email.value = "";
        message.value = "";
    }
}

