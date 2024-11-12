const pythonDIV = document.querySelector('#python');
const textDIV = document.querySelector('.pl2 .text');

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
