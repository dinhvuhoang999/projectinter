// Header 
const scroll = document.getElementsByTagName('header');
const logo = document.getElementsByClassName('logo')

window.onscroll = function () {
  if (window.scrollY >= 70) {
    logo[0].classList.add('logo-scroll')
    scroll[0].classList.add('scroll', 'bowshadow')
  }
  else {
    logo[0].classList.remove('logo-scroll')
    scroll[0].classList.remove('scroll', 'bowshadow')
  }

  // Scroll tab bar 
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("btnScroll").style.display = "flex";
  } else {
    document.getElementById("btnScroll").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Slide
let swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

let swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Tab
function openTab(evt, tabName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("dtl");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");

  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}

// Plus/Minus Max Value Input
function increment() {
  document.getElementById('demoInput').stepUp();
}

function decrement() {
  document.getElementById('demoInput').stepDown();
}


// Responsive menu 
let icon = document.getElementById("icon");
let icon1 = document.getElementById("a");
let icon2 = document.getElementById("b");
let icon3 = document.getElementById("c");
let nav = document.getElementById('nav');

icon.addEventListener('click', function () {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('nav-bar');
});








