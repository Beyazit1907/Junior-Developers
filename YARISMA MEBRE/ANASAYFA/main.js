document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menuBar');
    const sidebar = document.getElementById('sidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }

    menuBar.addEventListener('click', toggleSidebar);
});
