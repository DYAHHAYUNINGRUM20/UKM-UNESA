// ===========================================================
// ANIMASI SCROLL BAGIAN "SUARA MAHASISWA" - UKM UNESA
// ===========================================================
window.addEventListener('scroll', () => {
  const section = document.querySelector('.testimoni-section');
  const header = document.querySelector('.testimoni-header');
  const container = document.querySelector('.testimoni-container');
  if (!section) return;

  const pos = section.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (pos < screenPos) {
    header.classList.add('show');
    container.classList.add('show');
  }
});

// ===========================================================
// CONTACT FORM VALIDATION + AJAX SUBMISSION - UKM UNESA
// ===========================================================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const pesan = document.getElementById("pesan").value.trim();

      // Validasi input
      if (nama === "" || email === "" || pesan === "") {
        showMessage("⚠️ Harap isi semua kolom sebelum mengirim.", "error");
        return;
      }
      if (!validateEmail(email)) {
        showMessage("📧 Format email tidak valid. Mohon periksa kembali.", "error");
        return;
      }

      // Kirim data via AJAX ke fake API (simulasi)
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, email, pesan }),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Gagal mengirim data ke server!");
          return response.json();
        })
        .then(() => {
          showMessage("✅ Pesan berhasil dikirim ke server (simulasi)!", "success");
          form.reset();
        })
        .catch(() => {
          showMessage("❌ Terjadi kesalahan saat mengirim pesan.", "error");
        });
    });

    // Fungsi validasi email
    function validateEmail(email) {
      const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      return re.test(email);
    }

    // Fungsi menampilkan pesan sukses/error
    function showMessage(text, type) {
      messageBox.textContent = text;
      messageBox.className = `message ${type}`;
      messageBox.style.display = "block";
      setTimeout(() => (messageBox.style.display = "none"), 4000);
    }
  }
});

// ===========================================================
// SCROLL REVEAL ANIMATION UNTUK HOME PAGE
// ===========================================================
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".feature-box, .testimoni-card, .subscribe-container");
  revealElements.forEach(el => el.classList.add("reveal-on-scroll"));

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// ===========================================================
// 🌙 GLOBAL DARK MODE TOGGLE - UKM UNESA
// ===========================================================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Cek preferensi sebelumnya
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    if (toggle) toggle.textContent = "☀️";
  }

  // Event klik toggle
  if (toggle) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      toggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("darkMode", isDark);
    });
  }
});

/* ===========================================================
   ANIMASI SCROLL & INTERAKTIF HOME PAGE - UKM UNESA
   =========================================================== */
   document.addEventListener("DOMContentLoaded", () => {
    // --- Efek Scroll Reveal ---
    const revealElements = document.querySelectorAll(".feature-box, .testimoni-card, .subscribe-container");
 
    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add("visible");
        }
      });
    }
 
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
 
    // --- Efek Klik pada Fitur “Why Join” ---
    const featureBoxes = document.querySelectorAll(".feature-box");
    featureBoxes.forEach((box) => {
      box.addEventListener("click", () => {
        featureBoxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
      });
    });
 
    // --- Parallax Hero Section ---
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
      window.addEventListener("scroll", () => {
        const offset = window.scrollY * 0.3;
        heroSection.style.transform = `translateY(${offset * 0.1}px) scale(1.03)`;
      });
    }
 
    // --- Tombol Hero Glow ---
    const heroBtn = document.querySelector(".hero .btn");
    if (heroBtn) {
      heroBtn.addEventListener("mouseenter", () => {
        heroBtn.classList.add("hover-glow");
      });
      heroBtn.addEventListener("mouseleave", () => {
        heroBtn.classList.remove("hover-glow");
      });
    }
  });

// Animasi tampil grid UKM List saat di-scroll
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".ukm-item");

  function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // untuk animasi langsung tampil saat di-load
});


