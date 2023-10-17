"use strict";
// preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

window.addEventListener("DOMContentLoaded", () => {
  // Button Up

  this.onscroll = function () {
    scrollFunction();
  };

  const upbuttons = document.querySelectorAll(".button-up");

  for (const upbutton of upbuttons) {
    upbutton.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      document.getElementById("btnUp").className = "button-up visible";
    } else {
      document.getElementById("btnUp").className = "button-up hidden";
    }
  }

  // Tabs
  const tabs = document.querySelectorAll(".tabs__item");
  const tabsContent = document.querySelectorAll(".tabs__content");
  const tabsParent = document.querySelector(".tabs__list");
  if (document.contains(tabsParent)) {
    function hideTabContent() {
      tabsContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
      });

      tabs.forEach((item) => {
        item.classList.remove("tabs__item_active");
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hide");
      tabs[i].classList.add("tabs__item_active");
    }

    hideTabContent();
    showTabContent();
    tabsParent.addEventListener("click", (event) => {
      const target = event.target;

      if (target && target.classList.contains("tabs__item")) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  // Accordion
  const accordion_item = document.querySelectorAll(".accordion__item");

  accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector(".accordion__header");

    accordion_header_item.addEventListener("click", () => {
      const accordion_content_item = item.querySelector(".accordion__content");

      const item_actived = document.querySelector(".accordion__active");

      VerifyActive(item, accordion_content_item, item_actived);
    });
  });

  function VerifyActive(item, content, content_actived) {
    const icon_item = item.querySelector(".accordion__icon");
    const icon_item_active = document.querySelectorAll(".accordion__icon");

    icon_item_active.forEach((item) => (item.innerHTML = "+"));

    if (content_actived) {
      content_actived.style.height = 0;
      content_actived.classList.remove("accordion__active");
    }

    if (content !== content_actived) {
      icon_item.innerHTML = "-";
      content.classList.add("accordion__active");
      content.style.height = content.scrollHeight + 10 + "px";
    }
  }

  // Burger Menu
  const navIcon = document.querySelector(".nav__icon");
  const nav = document.querySelector(".nav__mobile");
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  const navBg = document.querySelector(".nav__mobile-bg");

  navIcon.addEventListener("click", openMenu);

  const navLink = document.querySelectorAll(".nav__link");
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function openMenu() {
    this.classList.toggle("nav__icon--active");
    nav.classList.toggle("active");
    navBg.classList.toggle("show");
    body.classList.toggle("_locked");
    html.classList.toggle("_locked");
  }
  function closeMenu() {
    navIcon.classList.remove("nav__icon--active");
    nav.classList.remove("active");
    navBg.classList.remove("show");
    body.classList.remove("_locked");
    html.classList.remove("_locked");
  }

  //  Swiper
  const slider = document.querySelector(".swiper");
  if (document.contains(slider)) {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      speed: 1100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  }

  // Video
  const links = document.querySelectorAll("#video");

  links.forEach(function (video) {
    video.addEventListener("click", () => {
      if (video.classList.contains("ready")) {
        return;
      }

      const src = video.dataset.src;

      video.classList.add("ready");
      video.insertAdjacentHTML(
        "afterbegin",
        `<iframe src= ${src} title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>`
      );
    });
  });

  // form validation

  function validation(form) {
    function createErrorInput(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement("label");
      parent.classList.add("error");
      errorLabel.classList.add("error-label");
      errorLabel.textContent = text;
      parent.append(errorLabel);
    }

    let result = true;

    function removeErrorInput(input) {
      const parent = input.parentNode;

      if (parent.classList.contains("error")) {
        parent.querySelector(".error-label").remove();
        parent.classList.remove("error");
      }
    }

    const allInputs = form.querySelectorAll(".form__text");

    allInputs.forEach((input) => {
      removeErrorInput(input);

      const reg = /[a-zA-Z]/;

      if (!reg.test(input.value)) {
        createErrorInput(input, "Fill in this form in English, please!");
        result = false;
      }
    });

    const inputPhone = form.querySelector(".form__number");
    removeErrorInput(inputPhone);
    const regPhone = /^1?\d{10}$/;
    if (!regPhone.test(inputPhone.value)) {
      createErrorInput(
        inputPhone,
        "Please, use phone input format as 19999999999"
      );
      result = false;
    }

    return result;
  }

  const formInPage = document.querySelectorAll("#form");

  formInPage.forEach((form) => {
    form.addEventListener("submit", function (e) {
      if (validation(this) === true) {
        alert("This form is filled in successfully.");
      } else {
        e.preventDefault();
      }
    });
  });
});
