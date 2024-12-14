<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
    </nav>

    <div id="content"></div> <!-- Контейнер для динамического контента -->

    <script src="script.js"></script>
</body>
</html>
2. JavaScript: Генерация контента
В твоём script.js можно создать объект с данными для всех секций и функцию, которая будет вставлять HTML в контейнер по клику:

javascript
Skopiuj kod
document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    // Данные для секций
    const sections = {
        about: `
            <section id="about">
                <h2>About Me</h2>
                <p>I am a 20-year-old aspiring developer with a strong desire to grow in the field of programming. Currently, I have a solid foundation in JavaScript, HTML, and CSS.</p>
                <p>I have always been passionate about technology and the potential it has to change the world.</p>
            </section>
        `,
        skills: `
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    <li><strong>JavaScript (ES6+):</strong> Solid understanding of JavaScript fundamentals.</li>
                    <li><strong>HTML5 and CSS3:</strong> Proficient in creating well-structured and responsive web pages.</li>
                    <li><strong>React.js:</strong> Currently learning React.js to build dynamic UI components.</li>
                    <li><strong>Git and GitHub:</strong> Version control and project collaboration.</li>
                    <li><strong>Responsive Design:</strong> Developing websites with mobile-first principles.</li>
                </ul>
            </section>
        `,
        projects: `
            <section id="projects">
                <h2>Projects</h2>
                <p>Here are some of the projects I’ve worked on to demonstrate my skills:</p>
                <ul>
                    <li><strong>Personal Portfolio:</strong> A responsive website showcasing my work, built with HTML5, CSS3, and JavaScript.</li>
                    <li><strong>Task Manager App:</strong> A to-do list app with DOM manipulation and local storage.</li>
                    <li><strong>Weather App:</strong> Fetches real-time weather data using a public API.</li>
                </ul>
                <p>Each project helped me strengthen different skills and taught me new lessons about web development.</p>
            </section>
        `
    };

    // Функция для отображения контента
    function loadSection(sectionId) {
        contentDiv.innerHTML = sections[sectionId];
    }

    // Инициализация - показываем первую секцию
    loadSection("about");

    // Обработчик кликов на ссылки навигации
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            loadSection(sectionId);
        });
    });
});
