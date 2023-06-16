"use strict";
// preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

window.addEventListener("DOMContentLoaded", () => {
  // form Validation
  const modal = document.querySelector(".popup");
  const overlay = document.querySelector(".popup__bg");
  const modalClose = document.querySelector(".popup__close");
  const body = document.querySelector("body");

  const openModal = () => {
    overlay.classList.add("active");
    modal.classList.add("popup__active");
    body.classList.add("_locked");
  };

  // targets all the classes and id from the HTML
  const id = (id) => document.getElementById(id);
  const classes = (classes) => document.getElementsByClassName(classes);

  // stores classes and id's in variables
  const userName = id("username");
  const email = id("tel");
  const form = id("form");
  const errorMsg = classes("error");

  // targets form submit button
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(userName, 0, "Username cannot be blank");
    engine(tel, 1, "Please enter a valid cell phone number");

    if (userName.value.trim() !== "" && email.value.trim() !== "") {
      openModal();
      modalClose.addEventListener("click", () => {
        overlay.classList.remove("active");
        modal.classList.remove("popup__active");
        body.classList.remove("_locked");
      });
      form.reset();
    }
  });

  const engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
    }
  };

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
});
