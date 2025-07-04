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
                    
