const skills = [
    "Programming Languages: JavaScript, HTML, CSS, Python, Java",
    "Web Development: HTML5, CSS3, JavaScript, React",
    "Database Management: SQL, MySQL",
    "Version Control: Git, GitHub",
    "Problem Solving and Debugging"
];

const experience = [
    "Intern at XYZ Company, June 2023 - August 2023",
    "Freelance Web Developer, 2022 - Present",
    "Volunteered at ABC Tech Community, 2021 - 2022"
];

const skillsList = document.getElementById('skills-list');
const experienceList = document.getElementById('experience-list');

function populateList(items, listElement) {
    items.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

populateList(skills, skillsList);
populateList(experience, experienceList);
