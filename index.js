"use strict";
// preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

window.addEventListener("DOMContentLoaded", () => {
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

  // Slider
  const sliderImages = document.querySelectorAll(".slider__item");
  const sliderLine = document.querySelector(".slider__line");
  const sliderDots = document.querySelectorAll(".slider__dot");
  const sliderBtnNext = document.querySelector(".slider__arrow-next");
  const sliderBtnPrev = document.querySelector(".slider__arrow-prev");
  const sliderContainer = document.querySelector(".slider__container");

  if (document.contains(sliderContainer)) {
    let sliderCount = 0;
    let sliderWidth;

    // Адаптивность слайдера
    window.addEventListener("resize", showSlide);

    // Кнопки слайдов вперед и назад
    sliderBtnNext.addEventListener("click", nextSlide);
    sliderBtnPrev.addEventListener("click", prevSlide);

    function showSlide() {
      sliderWidth = document.querySelector(".slider__wrapper").offsetWidth;
      sliderLine.style.width = sliderWidth * sliderImages.length + "px";
      sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));

      rollSlider();
    }

    showSlide();

    // Перелистывает слад вперед
    function nextSlide() {
      sliderCount++;
      if (sliderCount >= sliderImages.length) sliderCount = 0;

      rollSlider();
      thisSlide(sliderCount);
    }

    // Перелистывает слад назад
    function prevSlide() {
      sliderCount--;
      if (sliderCount < 0) sliderCount = sliderImages.length - 1;

      rollSlider();
      thisSlide(sliderCount);
    }

    // Задает шаг перемещения сладов
    function rollSlider() {
      sliderLine.style.transform = `translateX(${
        -sliderCount * sliderWidth
      }px)`;
    }

    // Указывает какой слайд по счету активен

    function thisSlide(index) {
      sliderDots.forEach((item) => item.classList.remove("slider__dot-active"));
      sliderDots[index].classList.add("slider__dot-active");
    }

    // Вешаем клик на dot
    sliderDots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
      });
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
});
