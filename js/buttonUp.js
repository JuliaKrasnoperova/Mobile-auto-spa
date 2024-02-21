"use strict";

// Button Up

// document.onscroll = function () {
//   scrollFunction();
// };

const upbuttons = document.querySelectorAll(".button-up");

const clickHandler = (e) => {
  e.preventDefault();
  const href = document.querySelector("#btnUp").getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
};

for (const upbutton of upbuttons) {
  upbutton.addEventListener("click", clickHandler);
}

export const scrollFunction = () => {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("btnUp").className = "button-up visible";
  } else {
    document.getElementById("btnUp").className = "button-up hidden";
  }
};

window.addEventListener("scroll", scrollFunction);
