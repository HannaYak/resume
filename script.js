// Массив с твоими навыками
const skills = [
    "JavaScript (ES6+): I have a solid understanding of JavaScript, including the basics of ES6, asynchronous programming with async/await, working with promises, and error handling.",
    "I confidently apply these skills in practice to create dynamic web pages.",
    "HTML5 and CSS3: I create structured, valid web pages using modern HTML5 standards. In my work, I use modern CSS3 features, including flexbox, grid, animations, and transitions.",
    "Basics of React.js: I am learning React and already using it to build web applications with a component-based approach. I know how to work with component state, props, and hooks.",
    "Git and GitHub: I confidently use Git for version control. I regularly use GitHub to store projects and collaborate with teams, as well as create pull requests and resolve conflicts.",
    "Responsive Design: I design websites with mobile devices in mind, using media queries and flexible grids. I create websites that display correctly across various devices.",
    "Problem Solving: One of my strong points is the ability to find solutions to different challenges, using logic and a creative approach, including debugging and code optimization."
];

// Массив с проектами
const projects = [
    "Personal Portfolio",
    "This project is my first serious web application, created from scratch to showcase my skills and experience. The site is fully responsive and displays correctly on all devices.",
    "I used HTML5, CSS3, and JavaScript to create this portfolio, as well as GitHub Pages for hosting. This project provided great practice in working with version control, and throughout the process,",
    "I learned how to optimize websites for fast loading and good performance.",
    "Task Manager App",
    "This project was built as practice in JavaScript and HTML. It is a simple web application for creating, editing, and deleting tasks. The project was completed using vanilla JavaScript without any third-party libraries.",
    "My goal was to master working with the DOM, event handling, and local storage for saving tasks between sessions.",
    "Weather App",
    "This project uses a public API to display real-time weather information. The application allows the user to enter a city, and it displays the current temperature, humidity, and other weather parameters.",
    "This is a JavaScript project that also uses asynchronous requests and APIs, helping me better understand working with external data and asynchronous operations."
];

// Функция для отображения страницы
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));  // Скрыть все страницы

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');  // Показать нужную страницу

    if (pageId === "skills") {
        displaySkills();  // Добавляем контент в секцию Skills
    } else if (pageId === "projects") {
        displayProjects();  // Добавляем контент в секцию Projects
    }
}

// Функция для отображения навыков
function displaySkills() {
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = ''; // Очищаем список перед добавлением новых элементов
    skills.forEach(skill => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
}

// Функция для отображения проектов
function displayProjects() {
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = ''; // Очищаем список перед добавлением новых элементов
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = project;
        projectsList.appendChild(listItem);
    });
}

// Изначально показываем About Me
showPage('about');


