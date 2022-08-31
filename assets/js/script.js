const scroll = document.getElementsByTagName('header');
const logo = document.getElementsByClassName('logo')

window.onscroll = function() {
    if (window.scrollY >= 70 ) {
        logo[0].classList.add('logo-scroll')
        console.log(logo);
        scroll[0].classList.add('scroll','bowshadow' )
        console.log(scroll);
    }
    else {
        logo[0].classList.remove('logo-scroll')
        scroll[0].classList.remove('scroll','bowshadow')
    }
}


// Slider

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 12,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
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
  var i, x, tablinks;
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
