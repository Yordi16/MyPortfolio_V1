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
      document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
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

// Konfigurasi ScrollReveal
ScrollReveal().reveal(".home-content, heading", {
  origin: "top",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", {
  origin: "bottom",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-contact h1, .about-img", {
  origin: "left",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// Typing effect dengan Typed.js
const typed = new Typed(".multiple-text", {
  strings: ["UI/UX Design", "Frontend Developer", "Backend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
