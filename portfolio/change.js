const pythonDIV = document.querySelector('#python');
const jsDIV = document.querySelector('#javascript');
const flutterDIV = document.querySelector('#flutter');
const textDIV = document.querySelector('.text');

// Mouseover event for changing text with smooth transition
pythonDIV.addEventListener('mouseover', function() {
    textDIV.classList.add('hidden');  // Apply fade-out and move down

    setTimeout(() => {
        textDIV.textContent = "I have a solid foundation in Python, which I use for backend development and data analysis tasks. My experience includes working with libraries like mpi4py for parallel and distributed computing, and I am actively expanding my skills in data analytics. Recently, I’ve started exploring web scraping and survey analysis on social media platforms, showing my proactive approach to broadening my Python applications.";
        textDIV.classList.remove('hidden');  // Apply fade-in and move up
    }, 1000); // Time matches transition duration
});

// Mouseout event for resetting text with smooth transition
pythonDIV.addEventListener('mouseout', function() {
    textDIV.classList.add('hidden');  // Apply fade-out and move down

    setTimeout(() => {
        textDIV.textContent = "You just hovered over python window";
        textDIV.classList.remove('hidden');  // Apply fade-in and move up
    }, 1000); // Time matches transition duration
});

jsDIV.addEventListener('mouseover', function() {
    textDIV.classList.add('hidden');  // Apply fade-out and move down

    setTimeout(() => {
        textDIV.textContent = "In JavaScript, I am skilled in creating dynamic web pages and UI components, utilizing it alongside HTML and CSS. I am proficient with JavaScript frameworks like React, which enables me to manage complex front-end development projects. I have hands-on experience with layout adjustments, aligning elements, and handling interactions. Currently, I’m building a website for buying and selling cars, applying my JavaScript knowledge to practical, real-world applications.";
        textDIV.classList.remove('hidden');  // Apply fade-in and move up
    }, 1000); // Time matches transition duration
});

// Mouseout event for resetting text with smooth transition
jsDIV.addEventListener('mouseout', function() {
    textDIV.classList.add('hidden');  // Apply fade-out and move down

    setTimeout(() => {
        textDIV.textContent = "Guess you are done reading about my javascript skills";
        textDIV.classList.remove('hidden');  // Apply fade-in and move up
    }, 1000); // Time matches transition duration
});

flutterDIV.addEventListener('mouseover', function() {
    textDIV.classList.add('hidden');  // Apply fade-out and move down

    setTimeout(() => {
        textDIV.textContent = "I am highly engaged with Flutter and enjoy creating responsive and reusable UI components. My projects, such as a semester chat application and a shopping app, demonstrate my experience with state management, widget design, and navigation. I have tackled challenges like container mapping, adaptive layouts using ListView, and embedding elements like a container within a bottom navigation bar. My work on modular, parameterized containers reflects my strong understanding of Flutter’s component-based architecture";
        textDIV.classList.remove('hidden');  // Apply fade-in and move up
    }, 1000); // Time matches transition duration
});

// Mouseout event for resetting text with smooth transition
flutterDIV.addEventListener('mouseout', function() {
    textDIV.classList.add('hidden');  // Apply fade-out and move down

    setTimeout(() => {
        textDIV.textContent = "Are you done reading flutter ?";
        textDIV.classList.remove('hidden');  // Apply fade-in and move up
    }, 1000); // Time matches transition duration
});