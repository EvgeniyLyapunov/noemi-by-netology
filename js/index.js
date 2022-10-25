window.addEventListener("DOMContentLoaded", () => {

  // open - close burger menu
  const burgerBtn = document.querySelector(".burger"),
        menu = document.querySelector(".hero__nav-burger"),
        stickTop = burgerBtn.querySelector(".burger__stick-top"),
        stickMiddle = burgerBtn.querySelector(".burger__stick-middle"),
        stickBottom = burgerBtn.querySelector(".burger__stick-bottom");

  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("hero__nav-burger_active");
    stickTop.classList.toggle("burger__stick-top_active");
    stickMiddle.classList.toggle("burger__stick-middle_active");
    stickBottom.classList.toggle("burger__stick-bottom_active");
  });


});