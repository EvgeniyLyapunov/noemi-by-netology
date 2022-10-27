window.addEventListener("DOMContentLoaded", () => {

  // open - close burger menu
  const burgerBtn = document.querySelector(".burger"),
        menu = document.querySelector(".hero__nav"),
        stickTop = burgerBtn.querySelector(".burger__stick-top"),
        stickMiddle = burgerBtn.querySelector(".burger__stick-middle"),
        stickBottom = burgerBtn.querySelector(".burger__stick-bottom");

  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("hero__nav_active");
    stickTop.classList.toggle("burger__stick-top_active");
    stickMiddle.classList.toggle("burger__stick-middle_active");
    stickBottom.classList.toggle("burger__stick-bottom_active");
  });

  // modal window (popup)
  const modalTimerId = setTimeout(() => openModal(".modal__overlay"), 500000);
  const closeBtn = document.querySelector(".modal__close");

  closeBtn.addEventListener("click", () => closeModal(".modal__overlay"));
  
  function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }
  
  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    document.body.style.overflow = "";
  }
  
        

});