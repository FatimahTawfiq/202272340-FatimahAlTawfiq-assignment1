# AI Integration
## AI tools used on HW-1

### 1-ChatGPT:
ChatGPT has been used to understand how to change the greeting message on the web page after getting the time and generating the greeting message. GhatGPT provides me with this code

in html file:

h1 id="header1"

in JS file:

// 1. Select the element
const title = document.getElementById('header1');

// 2. Change the content
title.textContent = "Hello, World!";

This code helped me to have a clear understanding of the process about how to change the text from the JS file where I apply it with some changes here:

let greetingMessage = document.getElementById('greeting');
greetingMessage.textContent = message;

### 2-Gemini:
I used Gemini in this assignment for debugging. Especially when i faced a problem which is not changing the greeting message even after connecting the JS with the html file.
Gemini reviews the code on both files and state that nothing wrong on both, but the problem might occur because the JS file script is on the head of the html file but the place of greeting message on the body, so the h2 with the id= greeting literally does not exist in the browser's memory yet. In addition, it suggests adding the defer attribute to the script to download it now but not run it until the entire HTML page has finished loading.

## Benefits & Challenges:

Using AI in programming projects improve the productivity and reduce the development time by efficiently and accurately find the code bugs and errors and even suggest possible solutions for fixing faults.
However, AI may not give the best results because it did not have the full code and in some cases the written prompt to the AI might be misleading.

## Learning Outcomes

* I learned how to modify existing text on HTML file by JS code using the id.

* I gained a deeper understanding of the HTML parsing lifecycle, specifically why placing scripts in the head without defer can lead to "null" reference errors because the body hasn't loaded yet.

## Responsible Use & Modifications

The AI tools were used as learning assistants rather than as complete solution generators. I made sure to understand the suggested code before applying it to my project. Instead of copying the responses directly, I reviewed the explanations, tested the code, and modified it to fit my specific implementation. AI was used responsibly to support learning and problem-solving while maintaining academic integrity and personal understanding of the material.
