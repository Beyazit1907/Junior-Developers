
document.addEventListener('DOMContentLoaded', function() {
    // Menü çubuğu ikonu
    var menuIcon = document.querySelector('.menuBar i');
    
    // Sidebar
    var sidebar = document.querySelector('.sidebar');
    
    // Menü çubuğu ikonuna tıklama olayı
    menuIcon.addEventListener('click', function() {
        // Sidebar açık mı kontrol et
        if (sidebar.classList.contains('open')) {
            // Sidebar açık ise kapat
            sidebar.classList.remove('open');
        } else {
            // Sidebar kapalı ise aç
            sidebar.classList.add('open');
        }
    });

    // Sayfanın herhangi bir yerine tıklama olayını dinleme
    document.addEventListener('click', function(event) {
        // Tıklanan hedef öğeyi alın
        var targetElement = event.target;

        // Sidebar açık ve tıklanan öğe ne sidebar ne de menuIcon ise sidebar'ı kapat
        if (sidebar.classList.contains('open') && !sidebar.contains(targetElement) && !menuIcon.contains(targetElement)) {
            sidebar.classList.remove('open');
        }
    });
});
