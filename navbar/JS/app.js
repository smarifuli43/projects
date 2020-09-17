const hamBurger = document.querySelector(".ham");
const nav = document.querySelector(".links");
const navLinks = document.querySelectorAll(".links li");

hamBurger.addEventListener("click", function () {
  nav.classList.toggle("active");

  // animation
  navLinks.forEach(function (link, index) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade .4s ease  forwards  ${index / 6 + 0.2}s`;
    }
  });
  //  ham burger toggle
  hamBurger.classList.toggle("toggle");
});

navLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    nav.classList.remove("active");
    hamBurger.classList.remove("toggle");

    navLinks.forEach(function (link) {
      if (link.style.animation) {
        link.style.animation = "";
      }
    });
  });
});

const navF = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  const navHeight = navF.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navF.classList.add("fixed-nav");
  } else {
    navF.classList.remove("fixed-nav");
  }
});

// scroll
const scrollLinks = document.querySelectorAll(".scroll");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navF.getBoundingClientRect().height;
    const containerHeight = nav.getBoundingClientRect().height;

    const fixedNav = navF.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    // if (navHeight > 80) {
    //   position = position + containerHeight;
    // }
  

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
