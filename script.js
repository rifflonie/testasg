// ================== NAVBAR & SCROLL ==================
const navLinks = document.querySelectorAll('.nav-links a');

// Smooth scroll and active link on click
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const target = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector(".navbar").offsetHeight;

        window.scrollTo({
            top: target.offsetTop - navHeight + 5,
            behavior: 'smooth'
        });
    });
});

// Highlight nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector(".navbar").offsetHeight;
    const scrollPos = window.scrollY + navHeight + 10;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// ================== DOWNLOAD RESUME ==================
document.getElementById('downloadResume').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'file/evan resume.pdf'; // path to your resume
    link.download = 'Evan_Resume.pdf';
    link.click();
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle icon
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️'; // light mode icon
    } else {
        darkModeToggle.textContent = '🌙'; // dark mode icon
    }
});

// ================== PROJECT POPUP ==================
const projectCards = document.querySelectorAll('.project-card');
const projectPopup = document.querySelector('.project-popup');
const projectTitle = document.getElementById('project-title');
const projectDesc = document.getElementById('project-desc');
const closeProjectPopup = document.getElementById('closeProjectPopup');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        const desc = card.dataset.description;

        projectTitle.innerText = title;
        projectDesc.innerText = desc;

        projectPopup.style.display = 'flex';
    });
});

closeProjectPopup.addEventListener('click', () => {
    projectPopup.style.display = 'none';
});

projectPopup.addEventListener('click', e => {
    if (e.target === projectPopup) {
        projectPopup.style.display = 'none';
    }
});

// ================== CONTACT FORM POPUP ==================
const form = document.querySelector(".contact-section form");
const popup = document.querySelector(".popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    popup.style.display = "flex";
    form.reset();
});

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});
