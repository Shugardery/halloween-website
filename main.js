/* *** Show Menu *** */
const d = document,
  w = window,
  navMenu = d.getElementById("nav-menu"),
  navToggle = d.getElementById("nav-toggle"),
  navClose = d.getElementById("nav-close");

/* *** Menu Show *** */
// Validate if constant exists
if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* *** MENU HIDDEN *** */
// Validate if constant exists
if(navClose) {
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove("show-menu");
  })
}

/* *** Remove Menu Mobile *** */
const navLink = d.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = d.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

//? Checar(esto es para mostrar el menu parece, fíjate para ver cómo se hace. Minuto 19 del video)
navLink.forEach(n => n.addEventListener("click", linkAction));

/* *** Home Swiper *** */
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

/* *** CHANGE BACKGROUND HEADER *** */
function scrollHeader(){
  const header = d.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
w.addEventListener('scroll', scrollHeader)

/* *** NEW SWIPER *** */
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
  spaceBetween: 16,
});

/* *** Scroll Sections Active Link *** */
const sections = d.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = w.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      d.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
          d.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })
}
w.addEventListener('scroll', scrollActive)

/* *** Show Scroll Up *** */
function scrollUp() {
  const scrollUp = d.getElementById("scroll-up");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 460) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}

w.addEventListener('scroll', scrollUp)

/* *** SCROLL REVEAL ANIMATION *** */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.about__img, .discount__data`,{origin: 'right'})