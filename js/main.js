// Toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

// Pastikan elemen-elemen yang digunakan ada
if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  };
}

// Fungsi untuk menangani aktifasi link saat scroll
function handleScroll() {
  let scrollY = window.scrollY;

  // Highlight active link based on scroll position
  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150; // Mengatur offset untuk deteksi link aktif
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    // Menambahkan class active pada link jika sedang di dalam viewport
    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
    }
  });

  // Sticky navbar saat scroll lebih dari 100px
  if (header) {
    header.classList.toggle("sticky", scrollY > 100);
  }

  // Menutup navbar setelah scrolling
  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  }
}

// Mengoptimalkan event scroll menggunakan requestAnimationFrame
let isScrolling = false;
window.onscroll = () => {
  if (!isScrolling) {
    isScrolling = true;
    window.requestAnimationFrame(() => {
      handleScroll();
      isScrolling = false;
    });
  }
};

// Menambahkan event listener untuk menutup navbar ketika link diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      menuIcon.classList.remove("fa-xmark");
      navbar.classList.remove("active");
    }
  });
});

// Konfigurasi ScrollReveal yang disederhanakan
ScrollReveal().reveal(".home-content, heading", {
  origin: "top",
  distance: "40px", // Mengurangi jarak untuk animasi yang lebih ringan
  duration: 1000, // Mengurangi durasi untuk animasi yang lebih cepat
  delay: 200,
  reset: true, // Reset animasi untuk elemen yang keluar dan masuk viewport
});

// ScrollReveal untuk elemen lain
ScrollReveal().reveal(".home-img, .portfolio-box, .contact form", {
  origin: "bottom",
  distance: "40px", // Mengurangi jarak
  duration: 1000, // Durasi lebih cepat
  delay: 200,
  reset: true,
});

// Typing effect dengan Typed.js
const typed = new Typed(".multiple-text", {
  strings: ["Student", "Graphic Designer", "Beginner Programmer"],
  typeSpeed: 100, // Memperlambat kecepatan ketik
  backSpeed: 100, // Memperlambat kecepatan backspace
  backDelay: 1000, // Menunggu lebih lama sebelum menghapus teks
  loop: true,
});

// Smooth scroll untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Offset untuk menghindari menutupi konten header
      behavior: "smooth",
    });
  });
});
