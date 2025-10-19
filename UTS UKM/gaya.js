// === ANIMASI SCROLL ===
const fadeElements = document.querySelectorAll('.ukm-item, .page-header, h2');
const slideLeftElements = document.querySelectorAll('.ukm-info');


function animateOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('show');
  });


  slideLeftElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('show');
  });
}


fadeElements.forEach(el => el.classList.add('fade-in'));
slideLeftElements.forEach(el => el.classList.add('slide-left'));


window.addEventListener('scroll', animateOnScroll);
animateOnScroll();




// === TOMBOL BACK TO TOP ===
const topButton = document.createElement('button');
topButton.innerText = '⬆';
topButton.id = 'topBtn';
document.body.appendChild(topButton);


window.addEventListener('scroll', () => {
  topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});


topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




// === SMOOTH SCROLL NAVBAR ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});




// === HIGHLIGHT MENU AKTIF ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });


  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});




// === BACKGROUND BUBBLE ===
const bg = document.getElementById('bg-bubble');


function createBubble() {
  const bubble = document.createElement('div');
  const size = Math.random() * 60 + 20; // ukuran bubble random
  bubble.classList.add('bubble');
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${8 + Math.random() * 8}s`;
  bg.appendChild(bubble);


  setTimeout(() => bubble.remove(), 15000);
}


setInterval(createBubble, 800);
