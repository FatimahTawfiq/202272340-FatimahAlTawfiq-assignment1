# 1. Assignment Overview
This assignment is a  personal portfolio website built using HTML, CSS, and JavaScript. It includes three main sections (About Me, Projects, Contact). A dynamic greeting feature was implemented using JavaScript to personalize the user experience based on the current time of day.

# 2. Technologies Used
* HTML: building the website
* CSS: styling and responsive design
* JavaScript: Dynamic content and interactivity
* Flexbox: Layout system
* GitHub: Version control

# 3. HTML File
On the head of the file the title was assigned to Fatimah Al Tawfiq Portfolio using the title tag and the css file and the JS files are linked using the link and script tags.

The body section is divided into three main sections: About, Projects, and Contact each one is on different div tag. On the top of the web page there is header that contains a greeting message, my name and a tagline.

About me section consist of a h3 and p tags that include my information.

projects section is divided into 3 sections, each section is for one project. On each project section, there is h4 tag for the project name, img tag to insert an image and p tag for project description

The last section on the file wich is Contact me consest of h3 and a form tags. The form tag include label and input tags for the name and email, a label and textare for the message, and an input tag for the submit button.

# 4. CSS File
The website styling is implemented using a dedicated external stylesheet. The CSS is organized into logical sections: Global Styles, Layout & Components, and Interactive Elements. This improves readability and maintainability.

The global Styles include changing the page background, coloring the text on headings and paragraphs, changing the font, and inserting padding.

In the Layout & Components section, the web page header is styled by changing the color using linear-gradient, aligning the text, and changing the border radius for better visibility. Also, the projects are set on flexbox with a flex-wrap for automatically wrapping onto new lines for a good interface across different screen sizes. For the images, the maximum width and height are set to prevent them from overflowing their container.

For the Interactive Elements section, the inputs and textareas are styled by changing the color, radius, adding shadow, and transition for better appearance. When the input field or the textarea clicked, it enters the focus mode, where the border color is changed to provide clear visual feedback while maintaining a clean design. The submit button is styled by changing the color that matches the header, adding padding, margin, and transition. Moreover, when the mouse hovers, the appearance is changed by slightly moving the button positioning and changing the brightness to add the feeling that the button has been clicked.

# 5. JavaScript File
The JS file contain a date object to get the current time and generate a greeting message base on it using if condition. It also include inserting the message on the web page.
# 6. Browser Compatibility
The website was tested on Google Chrome and Microsoft Edge on the labtop. It is also tested on the Ipad and mobile phone to verify that it works correctly across different devices.