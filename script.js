let prevScrollPos = window.pageYOffset;
let navbar = document.getElementById("myNavbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-60px"; /* Adjust this value as needed */
  }
  prevScrollPos = currentScrollPos;
};

// Auto-hide navbar after 5 seconds of no scrolling
let timer;
window.addEventListener("scroll", function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    if (prevScrollPos === window.pageYOffset) {
      navbar.style.top = "-60px";
    }
  }, 5000); /* 5000 milliseconds = 5 seconds */
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}