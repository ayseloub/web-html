document.addEventListener("DOMContentLoaded", function() {
    function hitungUmur(tanggalLahir) {
        const today = new Date();
        const birthDate = new Date(tanggalLahir);
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        
        return age;
    }

    // Menampilkan umur di halaman
    const umurSpan = document.getElementById("umur");
    const umurTextSpan = document.getElementById("umurText");

    if (umurSpan && umurTextSpan) {
        const umur = hitungUmur("2003-09-02");
        umurSpan.textContent = umur;
        umurTextSpan.textContent = umur;
    }

    // Menu dropdown
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    if (menuButton && menuDropdown) {
        menuButton.addEventListener("click", function() {
            menuDropdown.classList.toggle("hidden");
        });
    }
});

// Fungsi untuk scroll ke section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
