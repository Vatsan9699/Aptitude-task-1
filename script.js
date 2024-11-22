document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sidebarToggle = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.left-sidebar');

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});