// script.js

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Cek tema yang tersimpan di localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    themeToggleBtn.textContent = currentTheme === 'dark-mode' ? '☀️' : '🌙';
}

// Mengubah tema saat tombol diklik
themeToggleBtn.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙'; // Ikon bulan untuk mode terang
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️'; // Ikon matahari untuk mode gelap
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Slideshow Gambar untuk VTuber
const images = document.querySelectorAll('.vtuber-card img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Ganti gambar setiap 3 detik

// Modal untuk Gambar VTuber
const modal = document.getElementById("vtuber-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll('.vtuber-card img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
