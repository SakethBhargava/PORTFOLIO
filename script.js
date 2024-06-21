window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
};
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});