let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();

function toggleAnswer(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 798) {
    document
      .querySelectorAll("#nav-bar ul li:not(#booking)")
      .forEach((element) => {
        element.style.display = "none";
      });
  } else {
    document.querySelectorAll("#nav-bar ul li").forEach((element) => {
      element.style.display = "inline";
    });
  }
});

// Initially hide the non-essential nav elements if screen size is less than 798px
if (window.innerWidth < 798) {
  document
    .querySelectorAll("#nav-bar ul li:not(#booking)")
    .forEach((element) => {
      element.style.display = "none";
    });
}
