"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const bar1 = document.querySelector(".hamburger-menu .line-1");
const bar2 = document.querySelector(".hamburger-menu .line-2");
const bar3 = document.querySelector(".hamburger-menu .line-3");
const copyBtn = document.querySelectorAll(".syntax .copy-icon");
const primaryNav = document.querySelector(".content-nav");
// console.log(hamburgerMenu, bar1);

// HAMBURGER MENU
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  primaryNav.classList.toggle("open-menu");
});

// // COPY BUTTON
copyBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const parentEle = e.target.closest(".syntax");
    const codeELe = parentEle?.querySelector("code")?.textContent;

    if (codeELe) {
      // create an element to hold the code
      const tempEle = document.createElement("textarea");
      tempEle.value = codeELe;
      document.body.appendChild(tempEle);

      // selecting the element
      tempEle.select();

      try {
        navigator.clipboard
          .writeText(codeELe)
          .then(() => {})
          .catch((err) => {});
      } catch (err) {
        alert(`Some Error occured ${err}`);
      } finally {
        document.body.removeChild(tempEle);
      }
    }
  });
});
