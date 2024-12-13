

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  font-size: 1.1em;
  margin-bottom: 10px;
}

footer {
  text-align: center;
  margin-top: 30px;
}

button {
  background-color: #3498db;
  color: white;
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}
3. JavaScript — script.js (динамическое заполнение данных)
Этот файл будет содержать данные о тебе (например, имя, навыки, проекты) и скрипты для их отображения на веб-странице.

javascript
Skopiuj kod
// Junior JavaScript Developer Resume - Dynamic Website

// Объект для хранения личной информации
const personalInfo = {
    name: "Junior JavaScript Developer", // Здесь пишешь своё имя
    tagline: "Passionate about coding, eager to learn, and ready to build amazing things!", // Теглайн
    about: "I am a 20-year-old aspiring programmer with a strong foundation in JavaScript, HTML, and CSS. While I may not have years of experience, my dedication, problem-solving skills, and passion for coding make me an asset to any team.", // О себе
    contact: {
        email: "example@email.com", // Почта
        github: "https://github.com/your-username" // Ссылка на GitHub
    }
};

// Массив с навыками
const skills = [
    "JavaScript (ES6+), HTML5, CSS3", // Навыки (добавь свои)
    "React.js (basic knowledge)", // Навыки (добавь свои)
    "Version Control: Git and GitHub", // Навыки (добавь свои)
    "Responsive Web Design", // Навыки (добавь свои)
    "Problem-solving and debugging", // Навыки (добавь свои)
    "Basic understanding of APIs" // Навыки (добавь свои)
];

// Массив с проектами
const projects = [
    {
        name: "Personal Portfolio", // Название проекта
        description: "A responsive website showcasing my work and skills (hosted on GitHub Pages)." // Описание проекта
    },
    {
        name: "Task Manager App", // Название проекта
        description: "A to-do list app built with vanilla JavaScript." // Описание проекта
    },
    {
        name: "Weather App", // Название проекта
        description: "An application that fetches and displays weather data using a public API." // Описание проекта
    }
];

// Функция для отображения резюме на странице
function displayResume() {
    document.getElementById('name').textContent = personalInfo.name; // Заполняем имя
    document.getElementById('tagline').textContent = personalInfo.tagline; // Заполняем теглайн
    document.getElementById('aboutMe').textContent = personalInfo.about; // Заполняем описание

    // Отображаем список навыков
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Отображаем список проектов
    const projectsList = document.getElementById('projectsList');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.name}: ${project.description}`;
        projectsList.appendChild(li);
    });

    // Отображаем контактную информацию
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = `Email: <a href="mailto:${personalInfo.contact.email}">${personalInfo.contact.email}</a><br>
                            GitHub: <a href="${personalInfo.contact.github}" target="_blank">${personalInfo.contact.github}</a>`;
}

// Функция для имитации действия контакта
function contactMe() {
    alert("Feel free to reach out via email or GitHub. Looking forward to connecting!");
}

// Отображаем резюме
displayResume();
