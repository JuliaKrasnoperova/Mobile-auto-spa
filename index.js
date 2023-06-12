"use strict";
// preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

window.addEventListener("DOMContentLoaded", () => {
  // form Validation
  const form = document.querySelectorAll(".form");
  const inputArea = document.querySelectorAll(".input");

  function error() {
    inputArea.forEach((item) => {
      item.classList.add("error");
    });
  }

  function validation(form) {
    let result = true;

    const allInputs = form.querySelectorAll("input");
    for (const input of allInputs) {
      if (input.value == "") {
        console.log("error");
        error();
        result = false;
      }
    }

    return result;
  }

  form.forEach((item) => {
    item.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validation(this) === true) {
        inputArea.forEach((item) => {
          item.classList.remove("error");
        });
      }
    });
  });

  // Tabs
  const tabs = document.querySelectorAll(".tabs__item");
  const tabsContent = document.querySelectorAll(".tabs__content");
  const tabsParent = document.querySelector(".tabs__list");
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabs__item_active");
    });
  }
  function showTabContent(i) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.add("fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabs__item_active");
  }
  hideTabContent();
  showTabContent(0);
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
});
