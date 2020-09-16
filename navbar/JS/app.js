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

    navLinks.forEach(function(link){
     if(link.style.animation){
         link.style.animation="";
     }
    });

  });
});
