let search = document.querySelector('.search-box');
let searchIcon = document.querySelector('#search-icon');

searchIcon.onclick = (event) => {
  event.stopPropagation();
  search.classList.toggle('active');
};

window.addEventListener('scroll', () => {
  search.classList.remove('active');
  header.classList.toggle('shadow', window.scrollY > 0);
});

let header = document.querySelector('header');

const backToTopBtn = document.getElementById('backToTop');
window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    backToTopBtn.style.display = 'block';
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.style.display = 'none';
    backToTopBtn.classList.remove('active');
  }
};

backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
