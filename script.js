const typingText = document.getElementById("typing-text");

const words = ["Full Stack Developer","Intern", "Student"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (deleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ABOUT SECTION SCROLL ANIMATION

const aboutSection = document.querySelector(".about");

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aboutSection.classList.add("visible");
        } else {
            aboutSection.classList.remove("visible");
        }
    });
}, {
    threshold: 0.2
});

aboutObserver.observe(aboutSection);




// SKILLS SECTION SCROLL ANIMATION

const skillsSection = document.querySelector(".skills");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            skillsSection.classList.add("visible");
        } else {
            skillsSection.classList.remove("visible");
        }
    });
}, {
    threshold: 0.2
});

skillsObserver.observe(skillsSection);



// CONTACT SECTION SCROLL ANIMATION

const contactSection = document.querySelector(".contact");

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            contactSection.classList.add("visible");
        } else {
            contactSection.classList.remove("visible");
        }
    });
}, {
    threshold: 0.2
});

contactObserver.observe(contactSection);


// MOBILE NAVBAR FUNCTIONALITY

document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    // OPEN AND CLOSE MENU
    menuIcon.addEventListener("click", function () {

        navbar.classList.toggle("active");

        // Change hamburger to close icon
        if (navbar.classList.contains("active")) {
            menuIcon.classList.replace("bx-menu", "bx-x");
        } else {
            menuIcon.classList.replace("bx-x", "bx-menu");
        }

    });

    // CLOSE MENU WHEN A LINK IS CLICKED
    document.querySelectorAll(".navbar a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuIcon.classList.replace("bx-x", "bx-menu");

        });

    });

});