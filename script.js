// object for personal infomation 
const personalInfo = {
    name: "Anna - Junior JavaScript Developer",
    tagline: "Driven, ambitious, and eager to become a top-tier developer!",
    about: `
        I am a 20-year-old aspiring programmer with a strong passion for web development and technology.
        While I do not yet have extensive professional experience, I have spent countless hours learning 
        and honing my skills in JavaScript, HTML, and CSS. I am committed to solving challenges, improving 
        daily, and exploring new technologies like React.js.
    `,
    contact: {
        email: "anna.dev@example.com",
        github: "https://github.com/anna-aspiring-dev"
    }
};

// skills array
const skills = [
    "JavaScript (ES6+): Proficient in core JS concepts, DOM manipulation, and functions.",
    "HTML5 & CSS3: Solid understanding of semantic HTML and modern, responsive CSS design.",
    "Version Control: Hands-on experience with Git and GitHub for managing code.",
    "Responsive Web Design: Creating mobile-friendly, user-centered interfaces.",
    "API Integration: Basic understanding of RESTful APIs and JSON data.",
    "Problem-solving: Debugging and coding challenges.",
    "React.js: Learning to create scalable UI components."
];

//project array 
const projects = [
    {
        name: "Personal Portfolio Website",
        description: "A responsive portfolio showcasing my work, hosted on GitHub Pages."
    },
    {
        name: "Task Manager App",
        description: "A to-do list application with local storage and vanilla JavaScript."
    },
    {
        name: "Weather App",
        description: "An app that fetches and displays weather data using the OpenWeather API."
    }
];

// Resume
function displayResume() {
    document.getElementById('name').textContent = personalInfo.name;
    document.getElementById('tagline').textContent = personalInfo.tagline;
    document.getElementById('aboutMe').textContent = personalInfo.about;

    // Skils
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Project
    const projectsList = document.getElementById('projectsList');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${project.name}:</strong> ${project.description}`;
        projectsList.appendChild(li);
    });

    // Contacs
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = `
        <strong>Email:</strong> <a href="mailto:${personalInfo.contact.email}">${personalInfo.contact.email}</a><br>
        <strong>GitHub:</strong> <a href="${personalInfo.contact.github}" target="_blank">${personalInfo.contact.github}</a>
    `;
}

// buttom
document.getElementById('contactButton').addEventListener('click', () => {
    alert("Feel free to reach out! I'm excited to connect and collaborate.");
});

// play
displayResume();

