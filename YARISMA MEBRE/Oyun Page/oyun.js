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
document.getElementById('runButton').addEventListener('click', function() {
    // Kullanıcı tarafından girilen kodu al
    const code = document.getElementById('codeEditor').value;
    
    // Karakter elemanı
    const character = document.getElementById('character');
    
    try {
        // Kullanıcının yazdığı kodu bir fonksiyon olarak çalıştır
        const moveCharacter = new Function('character', code);
        
        // Kullanıcının yazdığı fonksiyonu karaktere uygula
        moveCharacter(character);
        
        // Görev başarı mesajı
        document.getElementById('output').innerText = 'Görev başarıyla tamamlandı!';
    } catch (error) {
        // Kod hatası olduğunda hata mesajı
        document.getElementById('output').innerText = 'Kod hatası: ' + error.message;
    }
});
