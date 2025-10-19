// ===============================
// Carousel Script (carousel.js)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(carousel => {
    const gallery = carousel.querySelector(".ukm-gallery");
    const images = gallery.querySelectorAll("img");
    const dotsContainer = carousel.querySelector(".carousel-dots");
    let index = 0;

    // Buat dot sesuai jumlah gambar
    images.forEach((_, i) => {
      const dot = document.createElement("button");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("button");

    // Fungsi update slide
    const update = () => {
      gallery.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(d => d.classList.remove("active"));
      dots[index].classList.add("active");
    };

    const goTo = (i) => {
      index = i;
      update();
    };

    // Tombol Next / Prev
    carousel.querySelector(".carousel-btn.next")?.addEventListener("click", () => {
      index = (index + 1) % images.length;
      update();
    });

    carousel.querySelector(".carousel-btn.prev")?.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      update();
    });
  });
});
