// Массив с твоими навыками
const skills = [
    "JavaScript (ES6+), HTML5, CSS3",
    "React.js (basic knowledge)",
    "Version Control: Git and GitHub",
    "Responsive Web Design",
    "Problem-solving and debugging",
    "Basic understanding of APIs"
];

// Массив с проектами
const projects = [
    "Personal Portfolio - A responsive website showcasing my work.",
    "Task Manager App - A to-do list app built with vanilla JavaScript.",
    "Weather App - Fetches and displays weather data using an API."
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


