/* Scroll Reveal */
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

// One
ScrollReveal().reveal('.title', {
  duration: 2000,
  distance: '150%',
  origin: 'left',
  opacity: null
});

ScrollReveal().reveal('.mini-title', {
  duration: 2000,
  distance: '150%',
  origin: 'left',
  opacity: null
});

ScrollReveal().reveal('.words', {
  duration: 2000,
  distance: '150%',
  origin: 'right',
  opacity: null
});

ScrollReveal().reveal('.graph', {
  duration: 2000,
  distance: '150%',
  origin: 'bottom',
  opacity: null
});