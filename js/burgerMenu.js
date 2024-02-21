"use strict";

// Burger Menu
const navIcon = document.querySelector(".nav__icon");
const nav = document.querySelector(".nav__mobile");
const body = document.querySelector("body");
const html = document.querySelector("html");
const navBg = document.querySelector(".nav__mobile-bg");

export const burgerMenu = () => {
  const navLink = document.querySelectorAll(".nav__link");

  const openMenu = () => {
    navIcon.classList.toggle("nav__icon--active");
    nav.classList.toggle("active");
    navBg.classList.toggle("show");
    body.classList.toggle("_locked");
    html.classList.toggle("_locked");
  };
  const closeMenu = () => {
    navIcon.classList.remove("nav__icon--active");
    nav.classList.remove("active");
    navBg.classList.remove("show");
    body.classList.remove("_locked");
    html.classList.remove("_locked");
  };

  navIcon.addEventListener("click", openMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));
};
