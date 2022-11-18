import _ from 'lodash';

const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button');
const hereYouAre = JSON.parse(localStorage.getItem("feedback-form-state"));
let feedback = {
    userEmail: "",
    userMessage: "",
}
let feedbackJson = JSON.stringify(feedback);

checkStorage();

email.addEventListener('input', _.throttle(() => {
    feedback.userEmail = email.value;
    localStorage.setItem("feedback-form-state", feedbackJson);
}, 500));

message.addEventListener('input', _.throttle(() => {
    feedback.userMessage = message.value;
    localStorage.setItem("feedback-form-state", feedbackJson);
}, 500));

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

