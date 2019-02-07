const togglers = document.querySelectorAll('.toggler');
const nav = document.querySelector('nav');

togglers.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
