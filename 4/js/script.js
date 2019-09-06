showSlides("#a");
showSlides("#b");


function showSlides(id) {

  debugger

  var slideIndex = 0;
  var slides = document.querySelectorAll(`${id} .item`);
  var arrows = document.querySelectorAll(`${id} .arrow-article`);
  var dots = document.querySelectorAll(`${id} .slider-dots-item`);


  if (slideIndex > slides.length) {
    slideIndex = 0
  }
  if (slideIndex < 0) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
      if (i = 0) {
        slides[slideIndex].style.display = "none";
        slideIndex -= 1;
        slides[slideIndex].style.display = "block";
      } else {
        slides[slideIndex].style.display = "none";
        slideIndex += 1;
        slides[slideIndex].style.display = "block";
      }
    })
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      slides[slideIndex].style.display = "none";
      slideIndex = i;
      slides[slideIndex].style.display = "block";
    });
    dots[i].className = dots[i].className.replace(" active", "");
  }

  console.log(arrows);

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}