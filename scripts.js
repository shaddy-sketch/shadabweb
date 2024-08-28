document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.onscroll = function() {
        if (window.pageYOffset > navbar.offsetTop) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
