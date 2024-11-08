//& Typed Animation
var typed = new Typed(".typed-animation", {
  strings: ["Larrey Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});

//* Owl Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoPlay: true,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//~ Counter
var nums = document.querySelectorAll(".counter-item .num");
var section = document.querySelector(".counter");
var started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - window.innerHeight / 2) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
};
function startCount(el) {
  var goal = parseInt(el.dataset.goal);
  var duration = 2000;
  var step = Math.max(1, Math.ceil(goal / (duration / 20)));

  var count = setInterval(() => {
    var current = parseInt(el.textContent);
    el.textContent = current + step > goal ? goal : current + step;
    if (parseInt(el.textContent) >= goal) {
      clearInterval(count);
      el.textContent = goal;
    }
  }, 30);
}
//! Progrees Bar

window.onload = function () {
  const progressBars = document.querySelectorAll(".progress-bar");
  const aboutSection = document.getElementById("about");
  let hasAnimated = false;

  const animateProgressBars = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    progressBars.forEach((progressBar) => {
      const maxValue = parseInt(progressBar.getAttribute("aria-valuemax"));
      let currentValue = 0;
      const animationDuration = 1000; // Total animation time in ms
      const increment = maxValue / (animationDuration / 30); // Linear increment per 20ms interval

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= maxValue) {
          currentValue = maxValue;
          clearInterval(interval); // Stop once target reached
        }
        // Update progress bar width and aria-valuenow
        progressBar.style.width = currentValue + "%";
        progressBar.setAttribute("aria-valuenow", Math.round(currentValue));
      }, 10); // Interval time for smoothness
    });
  };

  window.addEventListener("scroll", () => {
    const sectionPosition = aboutSection.getBoundingClientRect();
    if (
      sectionPosition.top < window.innerHeight &&
      sectionPosition.bottom >= 0
    ) {
      animateProgressBars();
    }
  });
};

//^ Scroll Nav
var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    nav.classList.add("new-nav");
  } else {
    nav.classList.remove("new-nav");
  }
});

//! Load Page

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const body = document.body;

  body.style.backgroundColor = "white";

  setTimeout(() => {
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
      body.style.backgroundColor = "";
    });
  }, 500);
});

