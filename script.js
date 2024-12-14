// Объект с содержимым страниц
const pages = {
    about: `
        <section id="about">
            <h2>About Me</h2>
            <p>My name is Anna, and I am a 20-year-old aspiring front-end developer with a passion for creating intuitive and visually appealing web interfaces.</p>
            <p>I began my journey into web development by exploring HTML, CSS, and JavaScript. Over time, I have become fascinated by how these technologies can bring ideas to life.</p>
            <p>My experience managing beauty salons has taught me leadership, responsibility, and the importance of delivering an exceptional user experience, skills that I now bring into web development.</p>
            <p>In addition to coding, I enjoy reading about design trends, learning new frameworks like React.js, and solving coding challenges on platforms like Codewars.</p>
            <p>My goal is to become a full-stack developer and contribute to projects that make a positive impact.</p>
            <p>When I'm not coding, you can find me exploring beauty trends, experimenting with designs, or sipping coffee while planning my next big idea!</p>
        </section>
    `,
    skills: `
        <section id="skills">
            <h2>Skills</h2>
            <p>Here are the technical and soft skills I have developed:</p>
            <ul>
                <li><strong>JavaScript (ES6+):</strong> Proficient in writing clean and efficient code with a focus on modern features like arrow functions, promises, and modules.</li>
                <li><strong>HTML5 and CSS3:</strong> Experienced in creating structured, semantic, and responsive web pages with CSS animations, Flexbox, and Grid.</li>
                <li><strong>React.js:</strong> Learning to build dynamic single-page applications (SPAs) using components, props, and state management.</li>
                <li><strong>Responsive Design:</strong> Building mobile-first web applications optimized for various screen sizes.</li>
                <li><strong>Git and GitHub:</strong> Comfortable using version control to collaborate on projects and manage code efficiently.</li>
                <li><strong>Problem Solving:</strong> I enjoy tackling coding challenges, debugging, and improving code performance.</li>
                <li><strong>Communication and Teamwork:</strong> My experience managing teams has taught me to communicate clearly and work effectively with others.</li>
            </ul>
            <p>Currently, I am focusing on strengthening my React skills and exploring Node.js to expand my knowledge of full-stack development.</p>
        </section>
    `,
    projects: `
        <section id="projects">
            <h2>Projects</h2>
            <p>Below are some of the projects I have worked on to demonstrate my skills and learning:</p>
            <ul>
                <li>
                    <strong>Personal Portfolio:</strong>
                    <p>A responsive website that showcases my projects, skills, and experience. Built with HTML5, CSS3, and JavaScript. Hosted on GitHub Pages.</p>
                </li>
                <li>
                    <strong>Task Manager App:</strong>
                    <p>A to-do list application created with vanilla JavaScript. The app allows users to add, edit, and delete tasks. I implemented local storage for persistence.</p>
                </li>
                <li>
                    <strong>Weather App:</strong>
                    <p>This application fetches real-time weather data using a public API (OpenWeatherMap). Users can search for a city and view temperature, humidity, and weather conditions.</p>
                </li>
                <li>
                    <strong>Calculator:</strong>
                    <p>A simple yet functional calculator built with HTML, CSS, and JavaScript to perform basic arithmetic operations.</p>
                </li>
                <li>
                    <strong>Blog Page:</strong>
                    <p>A blog template featuring responsive design, smooth scrolling, and animated components. Developed to practice CSS animations and JavaScript interactivity.</p>
                </li>
            </ul>
            <p>Each project helped me strengthen different skills, from understanding the DOM and event handling to API integration and responsive design.</p>
            <p>I am currently working on a new project: a clothing style assistant app that combines user input with dynamic suggestions. Stay tuned!</p>
        </section>
    `,
     <section id="contact">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to contact me via the following methods:</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:anna@example.com">anna@example.com</a></li>
                <li><strong>Phone:</strong> +1 234 567 890</li>
                <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/anna-profile" target="_blank">linkedin.com/in/anna-profile</a></li>
            </ul>
            <p>Alternatively, fill out the form below, and I will get back to you as soon as possible.</p>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </section>
    `
};

// Функция для загрузки контента
function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page];
}

// Обработчики событий на ссылки
document.addEventListener('DOMContentLoaded', () => {
    loadPage('about'); // Загружаем "About Me" по умолчанию

    // Добавляем обработчики для переходов по ссылкам
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page'); // получаем значение атрибута data-page
            loadPage(page); // загружаем соответствующую страницу
        });
    });

    // Обработчик отправки формы "Свяжитесь со мной"
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for your message! I'll get back to you soon.");
            contactForm.reset(); // Очищаем форму после отправки
        });
    }
});
