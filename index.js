// menubar
document.addEventListener('DOMContentLoaded', () => {
            let menuIcon = document.querySelector('#menu-icon');
            let navbar = document.querySelector('.navbar');
            if (menuIcon && navbar) {
                menuIcon.onclick = () => {
                    menuIcon.classList.toggle('bx-x');
                    navbar.classList.toggle('active');
                };
                // Close navbar when clicking on a link
                document.querySelectorAll('.navbar a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navbar.classList.contains('active')) {
                            menuIcon.classList.remove('bx-x');
                            navbar.classList.remove('active');
                        }
                    });
                });
            } else {
                console.error('Menu icon or navbar not found');
            }
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
      
 document.addEventListener('DOMContentLoaded', function() {
            const multipleTextElement = document.querySelector('.multiple-text');
            if (multipleTextElement) {
                try {
                    const typed = new Typed(multipleTextElement, {
                        strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer (MERN stack)'],
                        typeSpeed: 100,
                        backSpeed: 100,
                        backDelay: 1000,
                        loop: true
                    });
                } catch (error) {
                    console.error('An error occurred while initializing Typed.js:', error);
                }
            } else {
                console.error('The element with class "multiple-text" was not found.');
            }
        });
                    
// filter project

const filterButtons = document.querySelectorAll(".portfolio-filter button");
            const items = document.querySelectorAll(".portfolio-box");

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {

                    document.querySelector(".portfolio-filter .active").classList.remove("active");
                    button.classList.add("active");

                    const filter = button.getAttribute("data-filter");

                    items.forEach(item => {
                        if (filter === "all" || item.getAttribute("data-category") === filter) {
                            item.style.display = "block";
                        } else {
                            item.style.display = "none";
                        }
                    });
                });
            });

// toggle mode
            const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // icon change
    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});