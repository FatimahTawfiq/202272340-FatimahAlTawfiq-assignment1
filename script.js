
/* create the date object and use the getHours() method to ectract current time */
let currentTime= new Date().getHours();
/* Using if-else if-else condition to write the suitable greeting message based on the time */
let message;
if (currentTime < 12) {
    message = "Good Morning!";
} else if (currentTime < 18) {
    message = "Good Afternoon!";
} else {
    message = "Good Evening!";
}

/* Locate the greeting message and update its text content */
let greetingMessage = document.getElementById('greeting');
greetingMessage.textContent = message;